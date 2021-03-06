(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium",{
    baseLayerPicker : false,
    timeline : false,
    animation : false
  });

  viewer.dataSources.add(Cesium.KmlDataSource.load("restroom.kmz"));

viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(139.380316, 35.612932, 400),
  orientation: {
    heading: 0, // 水平方向の回転度
    pitch: -1.3, // 垂直方向の回転度
    roll: 0
  }
});


}());
