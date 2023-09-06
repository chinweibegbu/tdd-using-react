function MapChooser(locationName) {
    if (!locationName) {
        locationName = "default"
    }
    const imageName = locationName + ".jpg";
    return ( imageName );
}

export default MapChooser;