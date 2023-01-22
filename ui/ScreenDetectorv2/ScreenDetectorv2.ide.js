TW.IDE.Widgets.ScreenDetectorv2 = function () {
    // this.widgetIconUrl = function () {
    //     return "";
    // };

    this.widgetProperties = function () {
        const properties = {
            name: "ScreenDetectorv2",
            description: "ScreenDetectorv2 Chart",
            category: ["Common"],
            isExtension: true,
            supportsAutoResize: true,
            properties: {
           
                ScreenHeight: {
                    baseType: "NUMBER",
                    isBindingSource: true,
                },
                ScreenWidth: {
                    baseType: "NUMBER",
                    isBindingSource: true,
                },
         
            },
        };

        return properties;
    };

    this.beforeSetProperty = function (name, value) {
       
    
    

    };

    this.afterSetProperty = function (name, value) {
        this.updatedProperties();
        return true;
    };

    this.afterLoad = function () {};

    this.renderHtml = function () {
        return '<div class="widget-content widget-ScreenDetectorv2"></div>' ;
    };

    this.afterRender = function () {
        this.setupWidget();
    };

    this.setupWidget = function () {

        var widgetID = this.jqElementId;

        d3.select(`#${widgetID}`).selectAll("*").remove();
        // Handle Properties
        try {
            var allWidgetProps = this.allWidgetProperties().properties;

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


            //console.log.log("widgetProps idle screendetector v2");
            //console.log.log(widgetProps);
        } catch (error) {
            //console.log.log("error");
            //console.log.log(error);
        }

      //console.log.log("widht screen detector", window.innerWidth)
      //console.log.log("heiht screen detector", window.innerHeight)



        
  
  
  }

    // this.widgetServices = function () {
    //     return {
    //         clickedEvent: {
    //             description: "clickedEvent",
    //         },
       
    //     };

       
    // };

    this.widgetEvents = function () {
        return {
            WidthandHeightEvent: {
                description: "Event triggered when responsive",
            },
       
        };
    };


};
