import { loadScript } from '@/features/loadScript'
import { IPlacemarkOptions } from 'yandex-maps'
import { defaultConfig, getMapCenter, getMapContainer, MapConfig } from '@/features/maps/mapGeneral'
import { isMobile } from 'globals/adaptive'

export interface YMapConfig extends MapConfig {
    placemarkOptions?: IPlacemarkOptions,
}

const defaultYConfig: Required<YMapConfig> = {
    ...defaultConfig, placemarkOptions: {
        preset: 'islands#redIcon',
    },
}

export async function loadYMap(apikey: string): Promise<void> {
    if (window.ymaps !== undefined) return

    const script = `https://api-maps.yandex.ru/2.1/?apikey=${apikey}&lang=ru_RU`
    await loadScript(script, 'yaMap')

    await ymaps.ready()
}

function turnOffDragByOneFinger(map: ymaps.Map) {
    if (!isMobile) return

    const eventsPaneEl = map.panes.get('events')?.getElement()
    if (!eventsPaneEl) return

    const mobilePanelStyles = {
        alignItems: 'center',
        boxSizing: 'border-box',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '22px',
        fontFamily: 'Arial,sans-serif',
        opacity: '0.0',
        padding: '25px',
        textAlign: 'center',
        transition: 'opacity .3s',
        touchAction: 'auto',
    } as const satisfies {
        [Key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[Key]
    }

    Object.keys(mobilePanelStyles).forEach(function(name) {
        const cssProp = name as keyof typeof mobilePanelStyles

        eventsPaneEl.style[cssProp] = mobilePanelStyles[cssProp]
    })

    map.behaviors.disable('drag')

    // @ts-ignore
    ymaps.domEvent.manager.add(eventsPaneEl, 'touchmove', function(event) {
        if (event.get('touches').length === 1) {
            eventsPaneEl.style.transition = 'opacity .3s'
            eventsPaneEl.style.background = 'rgba(0, 0, 0, .45)'
            eventsPaneEl.textContent = 'Чтобы переместить карту проведите по ней двумя пальцами'
            eventsPaneEl.style.opacity = '1'
        }
    })

    // @ts-ignore
    ymaps.domEvent.manager.add(eventsPaneEl, 'touchend', function() {
        eventsPaneEl.style.transition = 'opacity .8s'
        eventsPaneEl.style.opacity = '0'
    })
}

export async function createYMap(container: string | HTMLElement, props?: YMapConfig) {
    const config = Object.assign(defaultYConfig, props)

    let mapEl = getMapContainer(container)
    const mapCenter = getMapCenter(mapEl)

    await loadYMap(mapEl.dataset.key)

    const map = new ymaps.Map(mapEl, {
        center: mapCenter, zoom: config.zoom,
    })

    if (!config.zoomByWheel) map.behaviors.disable('scrollZoom')

    if (config.setPlacemark) {
        const placemark = new ymaps.Placemark(map.getCenter(), {}, config.placemarkOptions)

        map.geoObjects.add(placemark)
    }

    turnOffDragByOneFinger(map)

    window.globalScripts.yaMap = 'created'

    return map
}