# ngx-silent-router
<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://github.com/aramirezj/ngx-silent-router/blob/main/shield.svg?raw=true">
  <h1 align="center">NgxSpinner</h1>
</p>

[![Support](https://img.shields.io/badge/Support-Angular%2014%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2015%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2016%2B-blue.svg?style=flat-square)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

The purpose of this library is to offer a "Router" that does not have to update the urls. A simple component to use as a `router-outlet` , allowing you to define the routes, data that will be received, a variable and a service to handle the route and a way to listen every event of the components

- [ngx-silent-router](#ngx-silent-router)
	- [Compatibility](#compatibility)
	- [Installing](#installing)
	- [Implementing](#implementing)
	- [Information, usage and showcase](#information-usage-and-showcase)

## Compatibility

| Angular Version | ngx-silent-router version                |
| --------------- | ----------------------------------- |
| Angular >= 16   | `npm i --save ngx-silent-router@1.0.0` |
| Angular >= 15   | `npm i --save ngx-silent-router@1.0.0` |
| Angular >= 14   | `npm i --save ngx-silent-router@1.0.0`  |

## Installing

Run `npm install ngx-silent-router`

## Implementing

Add the module `NgxSilentRouterModule` to your `AppModule`.

```
imports:[
	...
	NgxSilentRouterModule
	...
]
```

## Information, usage and showcase

[Interactive demo](https://aramirezj.github.io/ngx-silent-router/)