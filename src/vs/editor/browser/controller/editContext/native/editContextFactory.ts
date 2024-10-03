/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { DebugEditContext } from './debugEditContext.js';
import { EditContextInit, IEditContext } from './editContext.js';

export namespace EditContext {

	/**
	 * Checks if the EditContext is supported in the given window.
	 */
	export function supported(obj: any & Window): boolean {
		console.log('typeof obj?.EditContext : ', typeof obj?.EditContext);
		if (typeof obj?.EditContext === 'function') {
			return true;
		}
		return false;
	}

	/**
	 * Create an edit context. Check that the EditContext is supported using the method {@link EditContext.supported}
	 */
	export function create(window: Window, options?: EditContextInit): IEditContext {
		return new (window as any).EditContext(options);
	}

	/**
	 * Create a debug edit context. Check that the EditContext is supported using the method {@link EditContext.supported}
	 */
	export function createDebug(window: Window, options?: EditContextInit): IEditContext {
		return new DebugEditContext(window, options);
	}
}
