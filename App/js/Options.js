// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App.Options', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div19")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("22em")
                .setHeight("30em")
                .setOverflow("hidden")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_comboinput13")
                .setLeft("1.9333333333333333em")
                .setTop("1.9333333333333333em")
                .setWidth("18.9375em")
                .setHeight("4.5625em")
                .setPlaceholder("Input here...")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Virus name")
                .setLabelHAlign("left")
                .setValue("Cryptolocker")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setLeft("9.916666666666666em")
                .setTop("38.25em")
                .setWidth("11.5em")
                .setHeight("2.8333333333333335em")
                .setCaption("??? ??? ??? ??? ??? ??? ???")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            {
                                "ipage" : "status_from",
                                "tab" : "home"
                            }
                        ],
                        "method" : "setFI",
                        "event" : 1
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button26")
                .setLeft("22.5em")
                .setTop("33.25em")
                .setWidth("5em")
                .setCaption("??????")
                .setImageClass("fa fa-lg fa-plus")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block27")
                .setLeft("1.6666666666666667em")
                .setTop("8.75em")
                .setWidth("18.9375em")
                .setHeight("8.125em")
                .setBorderType("flat")
                .setBackground("#FFFFFF")
                .setOverflow("hidden")
            );
            
            host.xui_ui_block27.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("5.666666666666667em")
                .setCaption("Loading...")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#008B8B"
                    }
                })
            );
            
            host.xui_ui_block27.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setLeft("1.6666666666666667em")
                .setTop("2.5em")
                .setWidth("15.125em")
                .setHeight("5em")
                .setLabelSize("auto")
                .setLabelPos("none")
                .setMultiLines(true)
                .setValue("C:\\cryptolocker\\data\\del\\system\\win32")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput203")
                .setLeft("13.25em")
                .setTop("42.416666666666664em")
                .setWidth("15.833333333333334em")
                .setHeight("1.8333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("????????????")
                .setType("counter")
                .setUnit("??????")
                .setPrecision(0)
                .setValue(10)
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("1.875em")
                .setTop("6.875em")
                .setWidth("18.875em")
                .setCaption("We are removing it right now...")
                .setHAlign("left")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block15")
                .setLeft("1.6875em")
                .setTop("17.5em")
                .setWidth("18.9375em")
                .setHeight("7.5em")
                .setBorderType("flat")
                .setBackground("#FFFFFF")
                .setOverflow("hidden")
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label17")
                .setLeft("1.6666666666666667em")
                .setTop("0.8333333333333334em")
                .setWidth("5.666666666666667em")
                .setCaption("Loading...")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#008B8B"
                    }
                })
            );
            
            host.xui_ui_block15.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("1.6666666666666667em")
                .setTop("2.5em")
                .setWidth("15.1875em")
                .setHeight("4.375em")
                .setLabelSize("auto")
                .setLabelPos("none")
                .setMultiLines(true)
                .setValue("C:\\antivirus\\del\\cryptolocker")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton2")
                .setLeft("4.375em")
                .setTop("26.25em")
                .setWidth("13.125em")
                .setHeight("2.5em")
                .setCaption("                   Cancel ")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            {
                                "tab" : "receive",
                                "ipage" : "receive"
                            }
                        ],
                        "method" : "setFI",
                        "event" : 1
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});