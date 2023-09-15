var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_fluxo_co2_ton_ano_2 = new ol.format.GeoJSON();
var features_fluxo_co2_ton_ano_2 = format_fluxo_co2_ton_ano_2.readFeatures(json_fluxo_co2_ton_ano_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fluxo_co2_ton_ano_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fluxo_co2_ton_ano_2.addFeatures(features_fluxo_co2_ton_ano_2);
var lyr_fluxo_co2_ton_ano_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fluxo_co2_ton_ano_2, 
                style: style_fluxo_co2_ton_ano_2,
                interactive: true,
    title: 'fluxo_co2_ton_ano<br />\
    <img src="styles/legend/fluxo_co2_ton_ano_2_0.png" /> -85 - -20<br />\
    <img src="styles/legend/fluxo_co2_ton_ano_2_1.png" /> -20 - 20<br />\
    <img src="styles/legend/fluxo_co2_ton_ano_2_2.png" /> 20 - 65<br />\
    <img src="styles/legend/fluxo_co2_ton_ano_2_3.png" /> 65 - 95<br />\
    <img src="styles/legend/fluxo_co2_ton_ano_2_4.png" /> 95 - 180<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_fluxo_co2_ton_ano_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleMaps_1,lyr_fluxo_co2_ton_ano_2];
lyr_fluxo_co2_ton_ano_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_fluxo_co2_ton_ano_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_fluxo_co2_ton_ano_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_fluxo_co2_ton_ano_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});