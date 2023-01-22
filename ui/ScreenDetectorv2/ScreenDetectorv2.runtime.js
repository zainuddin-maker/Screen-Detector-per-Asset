TW.Runtime.Widgets.ScreenDetectorv2 = function () {
    this.renderHtml = function () {
        return '<div class="widget-content widget-ScreenDetectorv2"></div>' ;
    };



    this.updateProperty = function (updatePropertyInfo) {
        // TargetProperty tells you which of your bound properties changed

        this.setProperty(
            updatePropertyInfo.TargetProperty,
            updatePropertyInfo.SinglePropertyValue
        );


        this.setupWidget();
    };

    this.afterRender = function () {

        const changeResizenew = () => {
            //console.log.log("changeResize v2")
            //console.log.log("widht screen detector after click", window.innerWidth)
            //console.log.log("heiht screen detector after click", window.innerHeight)
            this.setProperty("ScreenWidth",  window.innerWidth);
            this.setProperty("ScreenHeight", window.innerHeight);
            this.jqElement.triggerHandler("WidthandHeightEvent");
            try {
                var allWidgetProps = this.properties;
    
                var widgetProps = {};
    
                for (const [key, value] of Object.entries(allWidgetProps)) {
                    if (key.includes("Style")) {
                        widgetProps[key] = TW.getStyleFromStyleDefinition(
                            this.getProperty(key)
                        );
                    } else {
                        widgetProps[key] = this.getProperty(key);
                    }
                }
    
                //console.log.log("widgetProps running ScreenDetectorv2 after click");
                //console.log.log(widgetProps);
            } catch (error) {
                //console.log.log("error");
                //console.log.log(error);
            }
            this.setupWidget();
        };

        window.addEventListener('resize', changeResizenew);
        changeResizenew();
    };

   


    // this.serviceInvoked = function (serviceName) {

    // };

   
    this.setupWidget = function () {

        var widgetID = this.jqElementId;
        // Remove all old/existing DOM element
        d3.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.properties;

            var widgetProps = {};

            for (const [key, value] of Object.entries(allWidgetProps)) {
                if (key.includes("Style")) {
                    widgetProps[key] = TW.getStyleFromStyleDefinition(
                        this.getProperty(key)
                    );
                } else {
                    widgetProps[key] = this.getProperty(key);
                }
            }

            //console.log.log("widgetProps running screendetector v2");
            //console.log.log(widgetProps);
        } catch (error) {
            //console.log.log("error");
            //console.log.log(error);
        }

        //console.log.log("widgetID screendetector v2:",widgetID);

        //console.log.log("widht screen detector new", window.innerWidth)
        //console.log.log("heiht screen detector", window.innerHeight)

        this.setProperty("ScreenWidth",  window.innerWidth);
        this.setProperty("ScreenHeight", window.innerHeight);

          
    
    
    }

};
