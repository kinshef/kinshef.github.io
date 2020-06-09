window.addEventListener('DOMContentLoaded', function() {


var product_color = document.querySelector('.product-color'),
		product_color_sel = document.querySelector('.product-color>select'), product_color_activ;

function productcol(){
	product_color_activ = product_color_sel.selectedIndex;
	product_color.setAttribute('class', 'product-color beforeCol_' + product_color_activ);
}

productcol();
product_color.addEventListener('change', productcol);


});
