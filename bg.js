$(document).ready(function(){
    
    let clickEvent = false;

    $("#myCarousel").on("click", ".nav a", function(){
        clickEvent = true;
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
    }).on("slid.bs.carousel", function(e){
        if (!clickEvent){
            const itemIndex = $(e.relatedTarget).index();
            const targetNavItem = $(".nav li[data-slide-to='" + itemIndex + "']");
            $(".nav li").not(targetNavItem).removeClass("active");
            targetNavItem.addClass("active");
        }
        clickEvent = false;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const closeSidebar = document.querySelector("#close-sidebar");
  
    menuIcon.addEventListener("click", function () {
      sidebar.classList.add("open");
      sidebarOverlay.classList.add("show");
  
      
      setTimeout(function () {
        closeSidebar.classList.add("rotate-icon"); 
      }, 500); 
    });
  
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); 
    });
  
    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); 
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const closeSidebar = document.querySelector("#close-sidebar");
    const menuContainer = document.querySelector(".menu-container");
  
    menuIcon.addEventListener("click", function () {
      sidebar.classList.add("open");
      sidebarOverlay.classList.add("show");
  
      
      setTimeout(function () {
        closeSidebar.classList.add("rotate-icon"); 
      }, 100); 
    });
  
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); 
    });
  
    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); 
    });
  
    
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.3; 
  
      if (scrollPosition > scrollThreshold) {
        menuContainer.classList.add("scrolled");
      } else {
        menuContainer.classList.remove("scrolled");
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");
  const closeSidebar = document.querySelector("#close-sidebar");
  const menuContainer = document.querySelector(".menu-container");
  const spanElement = document.querySelector(".text-warning");

  menuIcon.addEventListener("click", function () {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");

    
    setTimeout(function () {
      closeSidebar.classList.add("rotate-icon");
    }, 100); 
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

    closeSidebar.classList.remove("rotate-icon"); 
  });

  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

    closeSidebar.classList.remove("rotate-icon"); 
  });

  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      spanElement.classList.add("text-warning-scroll");
    } else {
      spanElement.classList.remove("text-warning-scroll"); 
    }
  });
});