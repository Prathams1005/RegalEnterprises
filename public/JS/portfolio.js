function openModal(imageSrc, captionText) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modal-image");
  var caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// sorting function

function filterImages(category, categoryElementId) {
  var images = document.querySelectorAll(".galleryPhotos li");

  // Remove the "active" class from all category elements
  var categoryElements = document.querySelectorAll(".galleryNavigation p");
  categoryElements.forEach(function (element) {
    element.classList.remove("active");
  });

  // Add the "active" class to the clicked category element
  var clickedCategoryElement = document.getElementById(categoryElementId);
  clickedCategoryElement.classList.add("active");

  if (category === "all") {
    // Show all images when 'All' is selected
    images.forEach(function (image) {
      image.style.display = "block";
    });
  } else {
    // Hide all images and then show those with the selected category
    images.forEach(function (image) {
      image.style.display = "none";
    });

    var categoryImages = document.querySelectorAll("." + category);
    categoryImages.forEach(function (image) {
      image.style.display = "block";
    });
  }
}
