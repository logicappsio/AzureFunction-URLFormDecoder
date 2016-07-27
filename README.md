# AzureFunction-URLFormDecoder

This is a useful Azure Function "Generic Node Webhook" for parsing URL Form encoded data.  It expects an object of

``` json
{
  "form": "<some-urlformencoded-data>"
}
```

and will return a response of a JSON object representation of the URL Form encoded data.  This is useful for webhooks like Twilio that will be sending url-formencoded data.
