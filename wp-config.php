<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u141005733_LDsoe' );

/** Database username */
define( 'DB_USER', 'u141005733_qTLJj' );

/** Database password */
define( 'DB_PASSWORD', 'BKo5SDlJ0f' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'G ZWmSC);Bdsmjd%N+}u(7n=0m5Wpt[s%TKR .N-YE14EHZZ)8VOq67cs^3Gz.pS' );
define( 'SECURE_AUTH_KEY',   '@d$pkv)Mxz$8IfSd2^KA~qipZ|vO>UM:STS#%r.bZke44{H8?I>[nQaP?^D9}+o.' );
define( 'LOGGED_IN_KEY',     'n+YgM1w&Q0Fv`@5eFC,qU/*Q7eOQ+FZ=!auPTq:X2a^~>MhLW<=FBI(vD|+C>J:W' );
define( 'NONCE_KEY',         '|h{eS.yoIYK1VQX*r?.&zM~Iklo,3G>x0ZTPL}ho<LcHz`$qvGlzx<cmKDFra5.z' );
define( 'AUTH_SALT',         'QaG]|q,1B@8x#*^w](%[PWC;2;J=1WOS]B3Fc?L_cmBSN.v)M9(i}h%LS/fhc~! ' );
define( 'SECURE_AUTH_SALT',  '1%awxU)Q<|l.#Ntygzm[71u#kN4*Z/k3qgWLPDv bv>`c};Wo<z^./6Ad`kdU|Ln' );
define( 'LOGGED_IN_SALT',    'KT97CxdK0PtDh!L=3pA.Ng7uKy6g_|cvNfBj9*bz(6[#V1+uF6$+4&E(b#wTqSDO' );
define( 'NONCE_SALT',        'YPN%V9~<tsdr5DKNLPe@}WyY.&<k9C2*Hk[.}tCsYr{gpp5E(]@%S}<J7=wq5~z0' );
define( 'WP_CACHE_KEY_SALT', 'H2?A.mp@9Q_L|;EJW4pY*{A#}n/;)rIa!Ux{yD,?Abty_W2Vb})T?}v9dliM{eF2' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
