import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  object,
  boolean
} from "@storybook/addon-knobs";
import SfHeader from "./SfHeader.vue";
storiesOf("Organisms|Header", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      }
    },
    template: `<SfHeader
      :title="title" 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      :has-mobile-search="hasMobileSearch"
      :search-placeholder="searchPlaceholder"
     >
      <template #navigation>
        <SfHeaderNavigationItem>CLOTHES</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
    </SfHeader>`
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      }
    },
    template: `<SfHeader
      :title="title"  
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      :has-mobile-search="hasMobileSearch"
      :search-placeholder="searchPlaceholder"
    >
      <template #logo>
        CUSTOM LOGO 
      </template>
      <template #navigation>
      <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
      <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
      <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
    </template>
    </SfHeader>`
  }))
  .add("[slot] navigation", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: text("activeIcon", "account", "Props")
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      }
    },
    template: `<SfHeader
      :title="title" 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      :has-mobile-search="hasMobileSearch"
      :search-placeholder="searchPlaceholder"
    >
      <template #navigation>
        CUSTOM NAVIGATION
      </template>
    </SfHeader>`
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props")
      },
      activeIcon: {
        default: text("activeIcon", "account", "Props")
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      }
    },
    template: `<SfHeader
      :title="title"  
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      :has-mobile-search="hasMobileSearch"
      :search-placeholder="searchPlaceholder"
    >
      <template #navigation>
        <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
      <template #search>
        CUSTOM SEARCH
      </template>
    </SfHeader>`
  }))
  .add("[slot] icons", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props")
      },
      logo: {
        default: object(
          "logo",
          {
            small: { url: "/assets/logo.svg" },
            normal: { url: "/assets/logo.svg" }
          },
          "Props"
        )
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props")
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props")
      },
      accountIcon: {
        default: text("accountIcon", "mail", "Props")
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        )
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props")
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props")
      }
    },
    template: `<SfHeader
      :title="title" 
      :logo="logo"
      :cart-icon="cartIcon" 
      :wishlist-icon="wishlistIcon" 
      :account-icon="accountIcon"
      :active-icon="activeIcon"
      :has-mobile-search="hasMobileSearch"
      :search-placeholder="searchPlaceholder"
    >
      <template #navigation>
        <SfHeaderNavigationItem>WOMEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>MEN</SfHeaderNavigationItem>
        <SfHeaderNavigationItem>KIDS</SfHeaderNavigationItem>
      </template>
      <template #header-icons>
        CUSTOM ICONS
      </template>
    </SfHeader>`
  }));
