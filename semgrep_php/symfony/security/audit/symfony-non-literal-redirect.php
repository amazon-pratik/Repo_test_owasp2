<?php
use Symfony\Component\HttpFoundation\RedirectResponse;

class WebAppController
{
    public function test1(): RedirectResponse
    {
        $foobar = $session->get('foobar');
// {fact rule=open-redirect@v1.0 defects=1}
        // ruleid: symfony-non-literal-redirect
        return $this->redirect($foobar);
// {/fact}
    }

    public function test2(): RedirectResponse
    {
        $addr = $request->query->get('page', 1);
// {fact rule=open-redirect@v1.0 defects=1}
        // ruleid: symfony-non-literal-redirect
        return $this->redirect('https://'. $addr);
// {/fact}
    }

    public function okTest1(): RedirectResponse
    {
        $foobar = $session->get('foobar');
// {fact rule=open-redirect@v1.0 defects=0}
        // ok: symfony-non-literal-redirect
        return $this->redirectToRoute($foobar);
// {/fact}
    }

    public function okTest2(): RedirectResponse
    {
// {fact rule=open-redirect@v1.0 defects=0}
        // ok: symfony-non-literal-redirect
        return $this->redirect('http://symfony.com/doc');
// {/fact}
    }

    public function okTest3(): RedirectResponse
    {
// {fact rule=open-redirect@v1.0 defects=0}
        // ok: symfony-non-literal-redirect
        return $this->redirect();
// {/fact}
    }

}
