(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium",{
    baseLayerPicker : false,
    timeline : false,
    animation : false
  });

  viewer.dataSources.add(Cesium.KmlDataSource.load("restroom.kmz"));

//----------------------------------------------------------------------------
  var img = document.createElement('img');
img.src = 'https://vaitu.github.io/RRMAP/img/RRMAP-icon.png';
viewer.container.appendChild(img)


var topOffset = Math.floor((Math.random() * 201) - 100);
var leftOffset = Math.floor((Math.random() * 201) - 100);

img.style.width = '500px';
img.style.position = 'absolute';
img.style.top = '25px';
img.style.left = '25px';
img.style['pointer-events'] = 'none';

//-------------------------------------------------------------------------------

viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(139.380316, 35.612932, 400),
  orientation: {
    heading: 0, // 水平方向の回転度
    pitch: -1.3, // 垂直方向の回転度
    roll: 0
  }
});


}());
