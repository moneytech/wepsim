
    var tut_welcome = new Array();

    tut_welcome.push({
                     id:          "welcome",
                     title:       "Welcome to the WepSIM simulator!",
                     message:     "This brief tutorial is going to show you how to:" +
                                  "<ol>" +
                                  "<li>Load an example.</li>" +
                                  "<li>Execute an example.</li>" +
                                  "<li>Configure the simulation.</li>" +
                                  "<li>Get help.</li>" +
                                  "</ol>",
                     code_pre:    function() { },
                     code_post:   function() { },
                     wait_next:   500
                  });

    tut_welcome.push({
                     id:          "welcome",
                     title:       "The menu button",
                     message:     "<img src='tutorials/menu_open.gif' style='width:100%; max-height:50vh'>" +
                                  "<br>" +
                                  "<b>It let you access to the (a) microcode/assembly editors, the simulation screen, " + 
                                  "(b) the examples, the configuration popup, and the help dialog.</b>" +
                                  "<br>",
                     code_pre:    function() { },
                     code_post:   function() { },
                     wait_next:   500
                  });

    tut_welcome.push({
                     id:          "welcome",
                     title:       "How to load some example.",
                     message:     "<img src='tutorials/example_usage.gif' style='width:100%; max-height:60vh'>" +
                                  "<br>" +
                                  "<b>Click the example button, <br>then click in the example 'title' name.</b>" +
                                  "<br>",
                     code_pre:    function() {  },
                     code_post:   function() { load_from_example_firmware("S1E1", true); },
                     wait_next:   500
                  });

    tut_welcome.push({
                     id:          "welcome",
                     title:       "How to execute an example.",
                     message:     "<img src='tutorials/simulation_xinstruction.gif' style='width:100%; max-height:60vh'>" +
                                  "<br>" +
                                  "<b>Click on next instruction/microinstruction to execute.</b>" +
                                  "<br>",
                     code_pre:    function() {  },
                     code_post:   function() {
                                      wepsim_execute_microinstruction() ;
                                      wepsim_execute_microinstruction() ;
                                  },
                     wait_next:   500
                  });

    tut_welcome.push({
                     id:          "welcome",
                     title:       "How to configure WepSIM.",
                     message:     "<img src='tutorials/config_usage.gif' style='width:100%; max-height:60vh'>" +
                                  "<br>" +
                                  "<b>Click in the menu again, then click in the configuration button.</b>" +
                                  "<br>",
                     code_pre:    function() { },
                     code_post:   function() { },
                     wait_next:   500
                  });

    tut_welcome.push({
                     id:          "welcome",
                     title:       "How to get the basic help.",
                     message:     "<img src='tutorials/help_usage.gif' style='width:100%; max-height:60vh'>" +
                                  "<br>" +
                                  "<b>Click in the menu again, <br>then click in the green help button.</b><br>" +
                                  "<b>You can get Spanish/English version, go to the help index, or close the help popup.</b>" +
                                  "<br>",
                     code_pre:    function() { },
                     code_post:   function() { },
                     wait_next:   500
                  });

    tut_welcome.push({
                     id:          "welcome",
                     title:       "Welcome to the WepSIM simulator!",
                     message:     "<img src='images/cfg-colors.gif' style='width:60%; max-height:60vh'>" +
                                  "<br>" +
                                  "<br>" +
                                  "<b>Please explorer the help sections for more information.</b>" + 
                                  "<br>",
                     code_pre:    function() {  },
                     code_post:   function() {  },
                     wait_next:   500
                  });
