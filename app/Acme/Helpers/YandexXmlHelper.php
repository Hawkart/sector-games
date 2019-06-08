<?php

namespace App\Acme\Helpers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use AntonShevchuk\YandexXml\Client;
use AntonShevchuk\YandexXml\Request;
use AntonShevchuk\YandexXml\Response;
use AntonShevchuk\YandexXml\Exceptions\YandexXmlException;

class YandexXmlHelper{

    static function search($query, $limit=2)
    {
        $request = Client::request(env('YANDEX_XML_USER', ''), env('YANDEX_XML_KEY', ''));

        try {
            $response = $request
                ->query($query)
                ->page(0)
                ->limit($limit)
                ->send()
            ;

            /*foreach ($response->results() as $i => $result) {
                echo $result->url;
                echo $result->domain;
                echo $result->title;
                echo $result->headline;
                echo sizeof($result->passages);
            }*/
        }
        catch (YandexXmlException $e) {
            return $e->getMessage();
        }
        catch (Exception $e) {
            return $e->getMessage();
        }

        /**
         * Возвращает массив с результатами
         *
         * $results является массивом из stdClass
         * Каждый элемент содержит поля:
         *  - url
         *  - domain
         *  - title
         *  - headline
         *  - passages
         */
        $results = $response->results();

        /**
         * Возвращает строку "Нашлось 12 млн. результатов"
         */
        //$total = $response->totalHuman();

        /**
         * Возвращает integer с общим количеством страниц результатов
         */
        //$pages = $response->pages();

        return $results;
    }
}