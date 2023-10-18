<?php
define( 'WP_CACHE', true );




define('WP_AUTO_UPDATE_CORE', 'minor');
define('WP_POST_REVISIONS', 0);
require_once(ABSPATH . '../config.php');
define('CONCATENATE_SCRIPTS', false);
define( 'WP_MEMORY_LIMIT', '256M' );
define('FORCE_SSL_ADMIN', true);

/* Save Database */
define('EMPTY_TRASH_DAYS', 1 );
define('AUTOSAVE_INTERVAL', 300 ); // seconds

if ( ! defined( 'SAVEQUERIES' ) ) {
define('SAVEQUERIES', false);
}

//define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
