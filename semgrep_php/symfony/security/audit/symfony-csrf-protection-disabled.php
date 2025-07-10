<?php

use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class Type extends AbstractType
{
  public function configureOptions(OptionsResolver $resolver)
  {
// {fact rule=coral-csrf-rule@v1.0 defects=1}
      // ruleid: symfony-csrf-protection-disabled
    $resolver->setDefaults([
      'data_class'      => Type::class,
      'csrf_protection' => false
    ]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $resolver->setDefaults(array(
      'csrf_protection' => false
    ));
// {/fact}


    $csrf = false;
// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $resolver->setDefaults([
      'csrf_protection' => $csrf
    ]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $resolver->setDefaults([
      'csrf_protection' => true
    ]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $resolver->setDefaults([
      'data_class' => Type::class,
    ]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $resolver->setDefaults($options);
  }
// {/fact}
}

class TestExtension extends Extension implements PrependExtensionInterface
{
  public function prepend(ContainerBuilder $container)
  {

// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $container->prependExtensionConfig('framework', ['csrf_protection' => false,]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $container->prependExtensionConfig('framework', ['something_else' => true, 'csrf_protection' => false,]);
// {/fact}

    $csrfOption = false;
// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $container->prependExtensionConfig('framework', ['csrf_protection' => $csrfOption,]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $container->loadFromExtension('framework', ['csrf_protection' => false,]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $container->loadFromExtension('framework', ['csrf_protection' => null,]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $container->prependExtensionConfig('framework', ['csrf_protection' => true,]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $container->prependExtensionConfig('framework', ['csrf_protection' => null,]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $container->prependExtensionConfig('something_else', ['csrf_protection' => false,]);
// {/fact}
  }
}

class MyController1 extends AbstractController
{
  public function action()
  {
// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $this->createForm(TaskType::class, $task, [
      'other_option' => false,
      'csrf_protection' => false,
    ]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $this->createForm(TaskType::class, $task, array(
      'csrf_protection' => false,
    ));
// {/fact}

    $csrf = false;
// {fact rule=coral-csrf-rule@v1.0 defects=1}
    // ruleid: symfony-csrf-protection-disabled
    $this->createForm(TaskType::class, $task, array(
      'csrf_protection' => $csrf,
    ));
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
      // ok: symfony-csrf-protection-disabled
    $this->createForm(TaskType::class, $task, ['csrf_protection' => true]);
// {/fact}

// {fact rule=coral-csrf-rule@v1.0 defects=0}
    // ok: symfony-csrf-protection-disabled
    $this->createForm(TaskType::class, $task, ['other_option' => false]);
// {/fact}

    $this->redirectToRoute('/');
  }
}
