document.addEventListener('DOMContentLoaded', function(e) {

    document.getElementById("chatWidgetSettings").click();
     /**
     * Show Chat Widget Submenu Settings
     */
    let chtWidgetDropdown = document.getElementsByClassName("chat-widget-btn");
    let i;

    for (i = 0; i < chtWidgetDropdown.length; i++) {
        chtWidgetDropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    /**
     * Toggle Sidebar Settings Menu
     */
    let tablinks = document.getElementsByClassName("tablinks");   
    let tabcontent = document.getElementsByClassName("tabcontent"); 
        
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function() {
            console.log(this.nextElementSibling.id);
            

            let linkid = this.id;    
            document.getElementById("panel-name").innerHTML = this.innerHTML;
            for (let index = 0; index < tabcontent.length; index++) {
                if(tabcontent[index].classList.contains(linkid)){
                    tabcontent[index].classList.add('show');
                    tabcontent[index].classList.remove('hide');
                }else {
                    tabcontent[index].classList.add('hide');
                    tabcontent[index].classList.remove('show');
                }
            }

        });
    }

    /**
     * Toggle Chat Widget Sidebar Submenu
     */
    let chatWidgetSubmenu = document.getElementsByClassName("chat-widget-submenu");
    let cwSubmenuTitle = document.getElementsByClassName("cw-submenu-title");

    for (let i = 0; i < chatWidgetSubmenu.length; i++) {
        chatWidgetSubmenu[i].addEventListener("click", function() {
            let linkid = cwSubmenuTitle[i].id;
            for (let index = 0; index < cwSubmenuTitle.length; index++) {
                if(cwSubmenuTitle[index].classList.contains(linkid)){
                    cwSubmenuTitle[index].classList.add('show');
                    chatWidgetSubmenu[index].classList.add('active-menu');
                    cwSubmenuTitle[index].classList.remove('hide');
                }else {
                    cwSubmenuTitle[index].classList.add('hide');
                    cwSubmenuTitle[index].classList.remove('show');
                    chatWidgetSubmenu[index].classList.remove('active-menu');
                }
            }
            
        });    
    }


    /**
     * Toggle/Expand Button Settings
     */

    let cwNotifBtn= document.getElementsByClassName("cw-expandable-btn");

    for (let index = 0; index < cwNotifBtn.length; index++) {
        cwNotifBtn[index].addEventListener('click', function(e) {
            this.nextElementSibling.classList.toggle('show');
            toggleArrow(this.id.split('-')[0]);
        }) ;
    }


    /**
     * Change Arrow Button to Up/Down
     */

    function toggleArrow(data) {
        const arrowDown = document.getElementById(data +"-arrow-down");
        const arrowUp = document.getElementById(data + "-arrow-up");

        if(arrowDown.classList.contains('hide')){
            arrowDown.classList.remove('hide');
            arrowUp.classList.add('hide');
        }else{
            arrowDown.classList.add('hide');
            arrowUp.classList.remove('hide');
        }
    }

    

    /**
     * toggle Widget Status to Active/Inactive
     */
    const widgetSwitch = document.getElementById("widget-switch");
    const widgetStatusText = document.getElementById("widget-status-text");

    widgetSwitch.addEventListener('click', function(e) {
        widgetStatusText.innerHTML = widgetSwitch.checked ? 'Active' : 'Inactive';
    });


    /**
     * toggle Minimized Window to Bubble/bar
     */
   
    let imgWindow = document.getElementsByClassName("img_window");

    for (let index = 0; index < imgWindow.length; index++) {
        imgWindow[index].addEventListener('click', function(e) {
            
            let menuIcon = this.id.split('--')[0];
            let isActive = this.id.split('--')[1] === 'active' ? 'inactive' : 'active';
            let elementId = document.getElementById(menuIcon + '--' + isActive);
            let data = menuIcon + '--' + isActive;
            minimizedPreview(data);
            if(this.classList.contains('hide')){
                this.classList.remove('hide');
                elementId.classList.add('hide');
            }else{
                this.classList.add('hide');
                elementId.classList.remove('hide');
                for (let i = 0; i < imgWindow.length; i++) {
                    let otherIcon = imgWindow[i].id.split('--')[0];
                    let otherIsActive = imgWindow[i].id.split('--')[1];
                    if(menuIcon !== otherIcon && otherIsActive === 'active'){
                        imgWindow[i].classList.add('hide');
                    }else if (menuIcon !== otherIcon && otherIsActive === 'inactive'){
                        imgWindow[i].classList.remove('hide');
                    }                   
                }
            }
        });      
    }

    /**
     * toggle Preview for Minimized Window - Bubble/Bar
     */

    const bubble = document.getElementById('preview--bubble');
    const bar = document.getElementById('preview--bar');
    
    function minimizedPreview(data){
        if(data === 'bubble_logo--active'){
            bubble.classList.remove('hide');
            bar.classList.add('hide');
        }else{
            bubble.classList.add('hide');
            bar.classList.remove('hide');
        }
    }


    /**
     * toggle Chat Icon Settings
     */
   
    let imgIcon = document.getElementsByClassName("img_icon");

    for (let index = 0; index < imgIcon.length; index++) {
        imgIcon[index].addEventListener('click', function(e) {
            
            let iconName = this.id.split('--')[0];
            let iconIsActive = this.id.split('--')[1] === 'active' ? 'inactive' : 'active';
            let iconId = document.getElementById(iconName + '--' + iconIsActive);
            if(this.classList.contains('hide')){
                this.classList.remove('hide');
                iconId.classList.add('hide');
            }else{
                this.classList.add('hide');
                iconId.classList.remove('hide');
                for (let i = 0; i < imgIcon.length; i++) {
                    let otherIcon = imgIcon[i].id.split('--')[0];
                    let otherIsActive = imgIcon[i].id.split('--')[1];
                    if(iconName !== otherIcon && otherIsActive === 'active'){
                        imgIcon[i].classList.add('hide');
                    }else if (iconName !== otherIcon && otherIsActive === 'inactive'){
                        imgIcon[i].classList.remove('hide');
                    }                   
                }
            }
        });      
    }


    /***
     * Toggle Preview Chat Widget
     */

    const togglePreviewWidget = document.getElementById('preview--img');
    const chatWidget = document.getElementById('chat-widget-interface');
    const minimized = document.getElementById('hide-btn');

    togglePreviewWidget.addEventListener('click', function(e){
        chatWidget.classList.add('show');
        this.classList.add('hide');
    });

    minimized.addEventListener('click', function(e){
        chatWidget.classList.remove('show');
        togglePreviewWidget.classList.remove('hide');
    });
    
});