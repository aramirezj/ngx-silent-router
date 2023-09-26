import { Type } from '@angular/core';
import { Data } from '@angular/router';

/** Representation of a SilentRoute */
export interface SilentRoute {
	path: string;
	component: Type<any>;
	title?: string;
	data?: Data;
}

export declare type SilentRoutes = SilentRoute[];
