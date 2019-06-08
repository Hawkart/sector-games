@component('mail::message')
# Introduction

{{ $content['title'] }}

@component('mail::button', ['url' => $content['url']])
{{ $content['button'] }}
@endcomponent

Best regards,<br>
{{ config('app.name') }}
@endcomponent