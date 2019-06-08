<?php

namespace App\Listeners;

use jdavidbakr\MailTracker\Events\ViewEmailEvent;

class EmailViewed
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  ViewEmailEvent  $event
     * @return void
     */
    public function handle(ViewEmailEvent $event)
    {
        $tracker = $event->sent_email;
        $model_id = $event->sent_email->getHeader('X-Model-ID');
        $model = Model::find($model_id);
        
        //
    }
}