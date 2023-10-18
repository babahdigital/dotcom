<?php /* Template Name: Maintenance */ 
$year = date("Y");
$default_link = esc_html__( '/wp-content/themes/bprotek/perbaikan/', 'bdotcom-perbaikan' );
$default = esc_html__( '/wp-content/themes/bprotek/', 'bdotcom' );
?>

<!doctype html>
<html>
	<head>		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>One Stop Building</title>
		<meta name="robots" content="noindex,nofollow">
        <meta charset="utf-8">
		<link rel="icon" type="image/png" href="<?php echo esc_attr( $default ); ?>favicon.ico">
        <link rel="stylesheet" type="text/css" href="<?php echo esc_attr( $default_link ); ?>css/bootstrap.min.css" />
        <style>
		  h1 { font-size: 50px; }
		  body { font: 20px; color: #333; }
		  a { color: #dc8100; text-decoration: none; }
		  a:hover { color: #333; text-decoration: none; }
		</style>
	</head>
<body>
  <div class="container" style="max-width: 650px;">
    <div class="grid text-left" style="margin-top: 25%;">
      <div>
		<h1>BabahDigital!</h1>
			<p class="muted">Perusahaan Konsultan IT, Elektrikal Berbasis IoT, & Developer Berbasis Teknologi. <a href="https://wa.me/62811585180?text=Hai%20Team%20BabahDigital,%20Saya%20Mau%20Bertanya%20Tentang%20Produk%20Anda">Hubungi Kami</a>, One Stop Building!</p>
			<p class="placeholder-glow font-monospace"><span class="placeholder" style="width: 20px; min-height: 0.15em!important; margin-right: 5px;"></span>Website Dalam Pengembangan</p>
      </div>
    </div>
  </div>
<script src="<?php echo esc_attr( $default_link ); ?>js/bootstrap.bundle.min.js"></script>
<script src="<?php echo esc_attr( $default_link ); ?>js/bootstrap.min.js"></script>
</body>