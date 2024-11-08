import toast, { Toaster } from "react-hot-toast";
// Get Card Data From Local Storage
const getFromCard = () => {
  const all = localStorage.getItem("card");
  if (all) {
    const cardItems = JSON.parse(all);
    return cardItems;
  } else {
    return [];
  }
};
// Get Wish List Data From Local Storage
const getWishList = () => {
  const all = localStorage.getItem("wishList");
  if (all) {
    const cardItems = JSON.parse(all);
    return cardItems;
  } else {
    return [];
  }
};

// Add Card Items to Local Storage
const addItemsToCard = (gadget) => {
  const cardItems = getFromCard();
  const isExist = cardItems.find(
    (item) => item.product_id == gadget.product_id
  );
  if (isExist) return toast.error("It is already added");
  cardItems.push(gadget);
  localStorage.setItem("card", JSON.stringify(cardItems));
  toast.success("Success Fully Added To Card List");
};

// Add Wish List Items to Local Storage
const addWishList = (gadget) => {
  const wishItems = getWishList();
  const isExist = wishItems.find(
    (item) => item.product_id == gadget.product_id
  );
  if (isExist) return toast.error("It's already added");
  wishItems.push(gadget);
  localStorage.setItem("wishList", JSON.stringify(wishItems));
  toast.success("Successfully Added To Wish List!");
};

// Remove Card data from local storage
function removeCardItem(id) {
  const cardItems = getFromCard();
  const remaining = cardItems.filter((item) => item.product_id != id);
  localStorage.setItem("card", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
}
// Remove Card data from local storage
function removeWishItem(id) {
  const wishItems = getWishList();
  const remaining = wishItems.filter((item) => item.product_id != id);
  localStorage.setItem("wishList", JSON.stringify(remaining));
  toast.success("Successfully Removed!");
}

// Remove all Card data from local storage
function purchased() {
  localStorage.removeItem("card");
}
export {
  addItemsToCard,
  getFromCard,
  addWishList,
  getWishList,
  removeCardItem,
  purchased,
  removeWishItem,
};
