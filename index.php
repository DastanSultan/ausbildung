<?php include("db.php"); ?>
<!DOCTYPE html>
<html lang="ru">

<?php include("item/head.php"); ?>
<body>
  <!-- Окно для регистрация   -->
  <?php include("item/register_modal.php"); ?>
  
  <!-- Окно для отправки сообщение -->
  <?php include("item/modal.php"); ?>
  
  <!-- Все блоки находится здесь -->
  <div class="container">
    
  <!-- header begin -->
  <?php include("item/header.php"); ?>
  <!-- header end -->

  </div>
  <div class="green_color_body">
    <div class="selector">
      <div class="search">
        <form id="search_activ" action="">
          <input type="text" autocomplete="off" id="search" class="" placeholder="Я ищу ...">
          <div class="search_button"><span><img src="/img/icons8-search-100.png"/></span></div>
        </form>
      </div>
    </div>
    <div class="category">
      <ul id="category_item">

        <!-- Все меню находиться здесь -->
        <?php
        $sql = "SELECT * FROM category";
        if($result = mysqli_query($conn, $sql)){
          $rowsCount = mysqli_num_rows($result);
          foreach($result as $row){
            echo '<a href="view_category.php?category_id=' . $row["id"] . '"><li class="category_li" ttr="' . $row["ttr"] . '"><span class="category_logo"><img src="img/catalog_logo/' . $row["img"] . '"></span><span class="category_text">' . $row['name'] . '</span></li></a>';
          }
        }
        ?>
      </ul>
      <div class="category_menu_klein">
        <div class="category_menu_klein_item">
          <ul>

            <!-- Все под меню находиться здесь -->
            <?php
            $sql = "SELECT * FROM `pod_category`";
            if($result = mysqli_query($conn, $sql)){
              $rowsCount = mysqli_num_rows($result); // количество полученных строк
              foreach($result as $row){
                echo "<li ttr=" . $row['ttr'] . " ><a href='view_category.php?atr=" . $row['id'] . "'><span>" . $row['name'] . "</span><span>" . $row['col'] . " <div class='vier-ecke'><div class='rotate'></div><div class='rotate'></div></div></span></a></li>";
              }
              } else{
                echo "Ошибка: " . mysqli_error($conn);
              }
            ?>
          </ul>
        </div>
      </div>
    </div> 
  </div>
  <div class="slider">
    <div class="slider_item">
      <ul id="slider_fotos">
        <!-- Slider -->
        <?
        $sql = "SELECT * FROM slider";
        if($result = mysqli_query($conn, $sql)){
          $rowsCount = mysqli_num_rows($result);
          foreach($result as $row){
            echo "<li class='slider_foto'><img src='" . $row['img'] . "' alt'" . $row['img'] . "'></li>";
          }
        }
        ?>
      </ul>
    </div>
  </div>
  <div class="haupt_text">
    <div class="haupt_text_item"><span>Новые объявления - Кыргызстан</span></div>
    <div class="alle_stadt">
      <div class="stadt"><span>Все города</span></div>
      <div class="logo_down"><img src="/img/icons8-expand-arrow-90.png"/></div>
    </div>
  </div>
  <div class="alles_stadte">
    <div class="alles_stadte_item">
      <ul>

        <!-- Списки города  -->
        <?
        $sql = "SELECT * FROM city";
        if($result = mysqli_query($conn, $sql)){
          $rowsCount = mysqli_num_rows($result);
          foreach($result as $row){
            echo "<li class='alles_item_stadte'><a href=''>" . $row['city'] . "</a></li>";
          }
        }
        ?>
      </ul>
    </div>
  </div>
  <div class="alle_producte">
    <div class="alle_proucte_item">
      <!-- Все товары  -->
      <?
      $sql = "SELECT * FROM tovar JOIN category ON category = ttr";
      if($result = mysqli_query($conn,$sql)){
        $rows = mysqli_num_rows($result);
        foreach($result as $row){
          echo
          '
          <div class="ein_product">
          <div class="id_input"></div>
          <a href="view.php?id=' . $row["ids"] . '">
            <div class="product_foto"><div class="product_foto_item"><img src="img/imges/' . $row['foto'] . '" alt=""></div></div>
            <div class="price_product"><div class="price_product_item">' . $row['price'] . '</div></div>
            <div class="category_product"><div class="category_product_item">' . $row['name'] . '</div></div>
            <div class="ordnet_product"><div class="ordnet_product_item">' . $row['description'] . '</div></div>
          </a>
          <div class="footer_product">
            <div class="contact_product"><div class="contact_product_item"><img src="/img/icons8-account-96.png" alt=""></div></div>
            <div class="sms_hearth">
              <div class="sms_item"><img ttr="' . $row['ids'] . '" src="https://img.icons8.com/material-rounded/96/40C057/filled-message.png"/></div>
              <div class="hearth_item"><img src="/img/icons8-favorite-96 (1).png" alt=""></div>
            </div>
          </div>
        </div>';
        }
      }
      ?>
    </div>
  </div>
</div>
<script src="js/jquery.js"></script>
<script src="js/jquery.modal.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>