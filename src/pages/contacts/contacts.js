import { createYMap } from 'features/maps/createYMap'

void function() {
    const mapContainer = document.querySelector('.contacts__map')

    if (!mapContainer) return

    createYMap(mapContainer)
}()