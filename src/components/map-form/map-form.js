import { createYMap } from 'features/maps/createYMap'

void function() {
    const mapContainer = document.querySelector('.map-form__map')

    if (!mapContainer) return

    createYMap(mapContainer)
}()