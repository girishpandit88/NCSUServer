<?php
echo '<!--start header -->';

echo' <div id="header-container">';
echo'   <header class="wrapper">
    <div id="logo"> <img src="images/ncsu.png" alt="Logo here" width="180" height="178"> </div>
  
    <!--start navigation -->
    <nav></nav>
    
  </header>
  <form class="searchform">';
echo'	<input class="searchfield" type="text" value="Search..." onFocus="if (this.value == \'Search...\') {this.value = \'\';}" onBlur="if (this.value == \'\') {this.value = \'Search...\';}" />';
echo '<input class="searchbutton" type="button" value="Go" />
</form></div>

<div id="nav">
    <div class="button"><a href="#">Home</a></div>
  <div class="button"><a href="#">Courses</a></div>
  <div class="button"><a href="#">Blogs</a></div>
  <div class="button"><a href="#">About</a></div>  
</div>';
echo '<!--end navigation -->
<!--end header -->';

?>