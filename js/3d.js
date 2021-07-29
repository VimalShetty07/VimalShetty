$( document ).ready( function() {

    var entries = [ 
        
        { label: 'HTML', target: '_top' },
        { label: 'CSS', target: '_top' },
        { label: 'JAVASCRIPT', target: '_top' },
        { label: 'DJANGO', target: '_top' },
        { label: 'SQLITE3', target: '_top' },
        { label: 'C++', target: '_top' },
        { label: 'JAVA', target: '_top' },
        { label: 'PYTHON', target: '_top' },
        { label: 'NODEJS', target: '_top' },
        { label: 'EXPRESSJS', target: '_top' },
        { label: 'GIT', target: '_top' },
        { label: 'GITHUB', target: '_top' },
        { label: 'MONGODB', target: '_top' },
        { label: 'MONGOD', target: '_top' },

    ];

    var settings = {

        entries: entries,
        width: 550,
        height: 450,
        radius: '85%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#000',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#00f7ff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#holder' ).svg3DTagCloud( settings );

} );