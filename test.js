(function () {

    if (addressHasError()) {
        const container = document.querySelector(".content-box__row.text-container");
        container.querySelector(".heading-2.os-step__title").innerHTML = "Tu pedido tiene un error"
        container.querySelector(".os-step__description").innerHTML = "Lamentablemente no pudimos encontrar la direccion por favor revisela en Moova.io"
        document.querySelector(".section__header.os-header > svg").outerHTML =
            '<svg width="20" height="20" style="color:#eea430;stroke:none;margin-right: 0.75em;" viewBox="0 0 20 20" class="icon-svg icon-svg--size-48 os-header__hanging-icon">'+
                '<path d="M10 18a8 8 0 110-16 8 8 0 010 16zM9 9a1 1 0 002 0V7a1 1 0 10-2 0v2zm0 4a1 1 0 102 0 1 1 0 00-2 0z"/>'+
            '</svg>';
    }

    function addressHasError() {
        $isThankyouPage = document.querySelector(".step") && document.querySelector(".step").getAttribute('data-step') === "thank_you";
        if (!$isThankyouPage) {
            return false;
        }
        
        const isFromMoova = Shopify.checkout.shipping_rate.handle.indexOf("shopify2Moova") > -1;
        if (!isFromMoova) {
            return false;
        }
        
        const addressHasErrors = true;
        return addressHasErrors;
    }   

});
