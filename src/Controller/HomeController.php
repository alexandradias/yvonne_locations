<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\UserType;
use App\Repository\AtelierRepository;
use App\Repository\ProductsRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{

    //_____________________________________________________________________________________________________________________
    //ROUTE->HOME

    //je crée ma route qui me permettra d'accéder
    // à la première vue de mon site 'home' = 'index'
    /**
     * @Route("/", name="home")
     */

    //je déclare ma fonction home

    public function home ()
    {
        //Ce return -> render
        // me permet d'accéder à l'index de mon site
        //le render renvoie au fichier home.html.twig
        return $this->render('user/home.html.twig');

    }

    //_____________________________________________________________________________________________________________________
    //ROUTE->GALERIE

    //je crée ma route qui me permettra d'accéder
    // à la première vue de mon site 'home' = 'index'
    /**
     * @Route("galerie", name="galerie")
     */

    //je déclare ma fonction galerie

    public function galerie ()
    {
        //Ce return -> render
        // me permet d'accéder à l'index de mon site
        //le render renvoie au fichier home.html.twig
        return $this->render('user/home.html.twig');

    }

}