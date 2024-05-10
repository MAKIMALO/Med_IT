console.log("Le fichier script.js fonctionne");

jQuery(document).ready(function() {
    jQuery('.popup-close').click(function(){
        jQuery(this).closest('.popup-overlay').hide();
    });
});