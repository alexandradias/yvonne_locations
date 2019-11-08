/*____________________________________________________________________________________________________________________*/
/*Je crée une variable avec une condition pour faire apparaitre une flèche pour me ramener en haut du site*/



$('.top').hide();  // d'abord, je masque l'icon arrow, qui porte la class "top"
var hauteur = 400; // 400px, c'est le nombre de pixels à partir duquel je déclenche l'apparition de la flèche

$(document).ready(function()
{
    $(window).scroll(function ()

    {//Au scroll dans la fenetre je déclenche la fonction

        if ($(this).scrollTop() > hauteur)
        {
            //si je défile de plus de 400px (variable "hauteur")nb de px du haut vers le bas

            $('.top').fadeIn(1000); // On affiche l'icon arrow

        } else
        {
            $('.top').fadeOut(1000); // On masque l'icon arrow

        }
    });
});

/*____________________________________________________________________________________________________________________*/
/*J'ajoute à ma arrow une animation au clic pour lui permettre d'atteindre le haut de ma page*/

$('.top').on();

$('.top').click(function()
{/*au clic une animation me permet d'atteindre le top de ma page lentement*/
    /*$(window).scrollTop(0);*/
    $('html, body').animate({scrollTop:0}, 'slow');
});

/*____________________________________________________________________________________________________________________*/
/*J'ajoute un fade à mes menus*/


$(document).ready( function () {
    $('#gallery_menu').click(function() {
        $('html,body').animate({scrollTop: $('#gallery_menu').offset().top}, 'slow'      );
    });
})
