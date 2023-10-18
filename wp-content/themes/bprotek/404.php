<?php
/**
 * 404 page
 */

$year = date("Y");
$default_link = esc_html__( '/wp-content/themes/bprotek/error/', 'bdotcom-404' );
$default = esc_html__( '/wp-content/themes/bprotek/', 'bdotcom' );
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta name="robots" content="noindex,nofollow" />
    <!-- Encoding -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Viewport width and initial-scale on mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title -->
    <title>Aduh Error Gan</title>
    <!--  Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <!-- Font Ukie -->
    <link type="text/css" media="all" href="<?php echo esc_attr( $default_link ); ?>assets/font/ukie-font/font-ukie/css/font-ukie.css" rel="stylesheet">
    <!-- include the bootstrap stylesheet -->
    <link rel="stylesheet" href="<?php echo esc_attr( $default_link ); ?>assets/css/bootstrap.min.css">
    <!-- include the site stylesheet -->
    <link rel="stylesheet" href="<?php echo esc_attr( $default_link ); ?>assets/css/styles-child-and-box.css">
    <!-- Favicons -->
    <link rel="icon" type="image/png" href="<?php echo esc_attr( $default ); ?>favicon.ico">
</head>
<body>

<!-- Start Error Page -->
<div class="error-page">

    <!-- Start container  -->
    <div class="container">

        <!-- Start row  -->
        <div class="row">
            <div class="col-md-12">
                <div class="error">
                    error
                </div>
                <svg id="child-with-box-svg"></svg>
                <h1 class="no-found">Tidak Ada File</h1>
                <p class="error-text">File yang anda cari tidak di temukan, mungkin link diganti,
                    atau file sementara sedang dalam tinjauan team.</p>
                <a href="/" class="btn"><i class="uf uf-arrow-left"></i>Kembali</a>
            </div>
        </div>
        <!-- End row  -->

    </div>
    <!-- End container -->

</div>
<!-- End Error Page -->

<!-- Start copyright -->
<p class="copyright">
    Copyright <i class="uf uf-copyright"></i> <?php echo $year; ?> By BabahDigital. All rights reserved.
</p>
<!-- End copyright -->

<!-- Scripts -->
<script src="<?php echo esc_attr( $default_link ); ?>assets/js/jquery.min.js" type="text/javascript"></script>
<script src="<?php echo esc_attr( $default_link ); ?>assets/js/snap.svg-min.js" type="text/javascript"></script>
<script src="<?php echo esc_attr( $default_link ); ?>assets/js/scripts.js" type="text/javascript"></script>
</body>
</html>