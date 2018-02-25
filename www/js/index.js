 mobiscroll.settings = {
        
        lang: 'en-UK',        // Specify language like: lang: 'pl' or omit setting to use default
        theme: 'mobiscroll-dark'        // Specify theme like: theme: 'ios' or omit setting to use default
    };
    
    $(function () {
    
        var now = new Date(),
            events = [{
                d: new Date(now.getFullYear(), now.getMonth(), 8, 8, 0),
                text: '',
                color: '#6e7f29'
            }, {
                d: new Date(now.getFullYear(), now.getMonth(), 8, 8, 45),
                text: '',
                color: '#de3d83'
            }, {
                d: new Date(now.getFullYear(), now.getMonth(), 8, 9, 30),
                text: '',
                color: '#f67944'
            }];
    
        
        // Mobiscroll Event Calendar initialization
        $('#demo-inline').mobiscroll().eventcalendar({
            display: 'inline',          // Specify display mode like: display: 'bottom' or omit setting to use default
            layout: 'liquid',           // More info about layout: https://docs.mobiscroll.com/4-0-0_beta3-1/eventcalendar#opt-layout
            data: events                // More info about data: https://docs.mobiscroll.com/4-0-0_beta3-1/eventcalendar#opt-data
        });
        
       
    });