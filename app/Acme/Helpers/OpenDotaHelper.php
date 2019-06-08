<?php

namespace App\Acme\Helpers;

use Illuminate\Support\Str;
use GuzzleHttp;
use Illuminate\Http\Request;

class OpenDotaHelper{
    
    const GET_METHOD = 'GET';
    const PUT_METHOD = 'PUT';
    const POST_METHOD = 'POST';
    const DELETE_METHOD = 'DELETE';

    /**
     * @var string
     */
    protected $baseUri = 'https://api.opendota.com/api/';

    /**
     * @var float
     */
    protected $timeout = 5.0;

    /**
     * @var string
     */
    protected $userAgent;

    /**
     * @var bool
     */
    protected $httpErrors = false;

    /**
     * @var bool
     */
    protected $returnJson = false;

    /**
     * Instantiate a new instance
     *
     * @param array $options
     */
    public function __construct(array $options)
    {
        $this->setReturnJson($options['returnJson']);
    }

    /**
     * Send the request
     *
     * @param string $method
     * @param string $endpoint
     * @param array  $params
     * @param bool   $accessToken
     * @return mixed
     */
    protected function sendRequest($method, $endpoint, $params = [], $accessToken = null)
    {
        $client = $this->getNewHttpClient($method, $params, $accessToken);
        $response = $client->request($method, $endpoint);
        $responseBody = $response->getBody()->getContents();

        return $this->getReturnJson() ? $responseBody : json_decode($responseBody, true);
    }

    /**
     * Get a new HTTP Client
     *
     * @param strring $method
     * @param array   $params
     * @param string  $accessToken
     * @return Client
     */
    protected function getNewHttpClient($method, $params, $accessToken = null)
    {
        $config = [
            'http_errors' => $this->getHttpErrors(),
            'base_uri' => $this->baseUri,
            'timeout' => $this->getTimeout(),
            'headers' => [
                'User-Agent' => ($this->getUserAgent() !== null) ? $this->getUserAgent() : GuzzleHttp\default_user_agent(),
            ],
        ];

        if ($accessToken) {
            $config['headers']['Authorization'] = sprintf('OAuth %s', $accessToken);
        }

        if (!empty($params)) {
            $config[($method == self::GET_METHOD) ? 'query' : 'json'] = $params;
        }

        return new GuzzleHttp\Client($config);
    }

    /**
     * Send a GET request
     *
     * @param string $endpoint
     * @param array  $params
     * @param bool   $accessToken
     * @return array|json
     */
    protected function get($endpoint, $params = [], $accessToken = null)
    {
        return $this->sendRequest(self::GET_METHOD, $endpoint, $params, $accessToken);
    }

    /**
     * Send a POST request
     *
     * @param string $endpoint
     * @param array  $params
     * @param bool   $accessToken
     * @return array|json
     */
    protected function post($endpoint, $params = [], $accessToken = null)
    {
        return $this->sendRequest(self::POST_METHOD, $endpoint, $params, $accessToken);
    }

    /**
     * Send a PUT request
     *
     * @param string $endpoint
     * @param array  $params
     * @param bool   $accessToken
     * @return array|json
     */
    protected function put($endpoint, $params = [], $accessToken = null)
    {
        return $this->sendRequest(self::PUT_METHOD, $endpoint, $params, $accessToken);
    }

    /**
     * Send a DELETE request
     *
     * @param string $endpoint
     * @param array  $params
     * @param bool   $accessToken
     * @return null|array|json
     */
    protected function delete($endpoint, $params = [], $accessToken = null)
    {
        return $this->sendRequest(self::DELETE_METHOD, $endpoint, $params, $accessToken);
    }

    /**
     * Set timeout
     *
     * @param float $timeout
     */
    public function setTimeout($timeout)
    {
        $this->timeout = (float) $timeout;
    }

    /**
     * Get timeout
     *
     * @return float
     */
    public function getTimeout()
    {
        return $this->timeout;
    }

    /**
     * Set user agent
     *
     * @param string $userAgent
     */
    public function setUserAgent($userAgent)
    {
        $this->userAgent = (string) $userAgent;
    }

    /**
     * Get user agent
     *
     * @return string
     */
    public function getUserAgent()
    {
        return $this->userAgent;
    }

    /**
     * Set HTTP errors
     *
     * @param bool $httpErrors
     */
    public function setHttpErrors($httpErrors)
    {
        $this->httpErrors = boolval($httpErrors);
    }

    /**
     * Get HTTP errors
     *
     * @return bool
     */
    public function getHttpErrors()
    {
        return $this->httpErrors;
    }

    /**
     * Set return as JSON
     *
     * @param bool $returnJson
     */
    public function setReturnJson($returnJson)
    {
        $this->returnJson = boolval($returnJson);
    }

    /**
     * Get return as JSON
     *
     * @return bool
     */
    public function getReturnJson()
    {
        return $this->returnJson;
    }
    
    public function getPlayer($account_id, $params = [])
    {
        return $this->get('players/'.$account_id, $params);
    }
    
    public function getPlayerWinLoss($account_id, $params = [])
    {
        return $this->get('players/'.$account_id."/wl", $params);
    }
    
    public function getPlayerTotal($account_id, $params = [])
    {
        return $this->get('players/'.$account_id."/totals", $params);
    }
    
    public function getPlayerMatches($account_id, $params = [])
    {
        return $this->get('players/'.$account_id."/matches", $params);
    }
    
    public function getMatch($match_id)
    {
        return $this->get('matches/'.$match_id, []);
    }
}