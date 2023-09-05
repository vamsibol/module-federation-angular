import { loadManifest } from '@angular-architects/module-federation';

loadManifest("/assets/config/manifest.json")
	.catch(err => console.error(err)).then(() => import('./bootstrap')
		.catch(err => console.error(err)))


