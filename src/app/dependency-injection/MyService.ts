import { Component, Injectable, OnInit } from '@angular/core';
@Injectable({

    providedIn: "root"
    
    })

export class MyService
{
    getName() : string{
        return "Hello World"
    }
}