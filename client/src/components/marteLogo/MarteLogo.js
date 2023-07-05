import { useContext } from "react";
import AppContext from "../../contexts/App.context";

import "./MarteLogo.scss";

function MarteLogo() {
    const { theme } = useContext(AppContext);

    return (
        <svg className={theme} width="183" height="57" viewBox="0 0 183 57" xmlns="http://www.w3.org/2000/svg">
            <path d="M177.732 30.8151C180.641 30.8151 183 28.6828 183 26.0526C183 23.4223 180.641 21.29 177.732 21.29C174.822 21.29 172.464 23.4223 172.464 26.0526C172.464 28.6828 174.822 30.8151 177.732 30.8151Z" />
            <path d="M80.9061 47.9051H80.7938C79.3448 49.8751 77.278 51.3881 72.3694 51.3881C66.5173 51.3881 62.3838 48.6159 62.3838 43.4777C62.3838 37.7809 67.517 35.9632 73.8746 35.161C78.6147 34.5518 80.7938 34.2065 80.7938 32.2365C80.7938 30.2665 79.1763 29.1597 75.9975 29.1597C72.4256 29.1597 70.6958 30.3173 70.4824 32.7849H63.7317C63.9563 28.2457 67.6855 24.2651 76.0537 24.2651C84.4219 24.2651 88.0949 27.7482 88.0949 33.7902V46.9505C88.0949 48.9205 88.4319 50.0782 89.0946 50.525V50.7788H81.7935C81.3442 50.2711 81.0746 49.0627 80.9061 47.9051ZM80.9623 41.6498V37.7708C79.6256 38.4714 77.5588 38.8776 75.6606 39.2838C71.7067 40.086 69.7523 40.8984 69.7523 43.3152C69.7523 45.732 71.5382 46.5951 74.2116 46.5951C78.5585 46.5951 80.9623 44.1783 80.9623 41.6498Z" />
            <path d="M107.899 29.0584H108.067C109.797 26.1339 111.751 24.6208 115.099 24.6208C115.93 24.6208 116.435 24.6716 116.885 24.8239V30.8253H116.716C111.751 30.3684 108.18 32.7445 108.18 38.1874V50.7893H100.598V24.9255H107.899V29.0584Z" />
            <path d="M126.546 26.1337H130.5V18.0709H137.913V26.1337H142.822V32.0031H137.913V44.3815C137.913 46.3007 139.082 46.9506 140.755 46.9506C141.699 46.9506 142.99 46.8999 142.99 46.8999V51.9365C142.99 51.9365 141.261 52.0381 138.25 52.0381C134.566 52.0381 130.5 50.7282 130.5 45.8336L130.23 31.9929H126.535V26.1235L126.546 26.1337Z" />
            <path d="M152.671 37.8317C152.671 30.1649 158.411 24.2245 166.779 24.2245C175.978 24.2245 180.887 30.5711 180.887 39.8017H160.141C160.702 43.7823 163.151 46.2498 167.442 46.2498C170.396 46.2498 172.126 45.0414 172.957 43.0714H180.427C179.371 47.6613 174.855 51.5404 167.487 51.5404C158.007 51.5404 152.66 45.539 152.66 37.8317H152.671ZM160.253 35.0595H172.968C172.744 31.7795 170.351 29.515 166.891 29.515C162.881 29.515 160.927 31.678 160.253 35.0595Z" />
            <path d="M6.20117 24.8033H13.5135V28.2864H13.682C15.2433 25.9203 18.029 24.1027 21.994 24.1027C25.6221 24.1027 28.5201 25.9203 29.9129 28.6418H30.0252C31.9797 25.8188 34.99 24.1027 38.618 24.1027C44.6386 24.1027 48.0421 27.6365 48.0421 33.2824V50.6874H40.4489V34.4401C40.4489 31.5155 38.8315 30.0025 36.0458 30.0025C32.867 30.0025 30.9126 32.2264 30.9126 35.6485V50.6773H23.3194V34.4299C23.3194 31.5054 21.702 29.9923 18.9163 29.9923C15.8499 29.9923 13.7831 32.2162 13.7831 35.6383V50.6671H6.18994V24.7932L6.20117 24.8033Z" />
            <path d="M11.1392 14.3392L11.1988 14.3988L11.0945 14.7711L10.3946 14.8754H9.72436L9.26267 14.786L8.89034 14.8605H8.3244L7.72867 14.8456H7.08827L6.70104 14.786L6.37339 14.8605H5.80745L5.56916 14.786L5.45002 14.5775L5.46491 14.369V13.9967L5.71809 13.8626H6.01596L6.20957 13.818H6.70104L6.99891 13.8924L7.14784 13.9967L7.41592 13.8775L7.2223 13.7435L7.14784 13.2818V12.9541L7.08827 12.418V11.8669L7.16273 11.2712L7.07337 10.8095L7.13295 10.4372L7.07337 10.3776L7.19252 9.99041L7.2223 9.60318L7.37124 9.30532L7.14784 9.26064L6.89465 9.35L6.3585 9.42446L6.00106 9.36489L5.52448 9.21596L5.42023 8.85852L5.55427 8.59045L5.9266 8.38194H6.28403L6.40318 8.32237L7.16273 8.39684H7.63931L8.08611 8.51598L8.16057 8.78406L8.14568 8.87342V9.45425L8.07122 9.82658L8.30951 9.58829L8.39886 9.30532L8.5329 9.21596L8.74141 8.87342L8.99459 8.66491L9.2031 8.54577L9.32224 8.38194L10.0371 8.2479L10.2009 8.27769L10.752 8.23301L11.3179 8.39684L11.4966 8.54577V9.32021L11.3179 9.49893H10.6775L10.3648 9.46914L9.88818 9.51382H9.59032L9.38181 9.61808L9.12863 9.64786L8.87545 9.93083L8.41376 10.3181L8.19036 10.3329L8.101 10.4968L8.29461 10.6457L8.3244 10.9138L8.39886 11.167L8.26483 11.9116L8.35419 12.3733L8.27972 12.701L8.36908 13.4754L8.27972 13.7584L8.41376 13.9669L8.84566 13.818L9.17331 13.9073L9.60521 13.8477L9.93286 13.8775L10.335 13.8031L10.7222 13.8328L11.0796 13.9818L11.1392 14.3392ZM15.3333 12.418L15.3779 12.552L15.4077 12.7903L15.5418 13.0733L15.646 13.1031L15.8396 13.5201L16.1524 13.7286L16.2418 13.818L17.3141 14.0562H17.7162L18.2076 13.8924L18.2672 13.7584L18.714 13.6392L19.1608 13.0584L19.2502 13.0286L19.5182 12.7754H19.831L19.9353 12.8201L20.1735 12.8648L20.2629 13.1329L20.2033 13.3712L19.965 13.9222L19.6374 14.1307L19.414 14.369L18.9225 14.6966L18.6396 14.8009H18.5055L18.2523 14.92L17.6417 15.0541H17.3438L16.6885 14.9349H16.3907L16.1524 14.8903L15.8098 14.7264L15.4524 14.5626L15.0652 14.369L14.8716 14.0116L14.5886 13.7733L14.529 13.5797L14.3354 13.2073L14.2014 13.1478L14.1567 12.6414L14.1865 12.3435L14.0376 11.5691L14.112 11.2414V10.6308L14.2312 10.3478L14.2461 10.184L14.4844 9.82658L14.6631 9.43936L14.7971 9.24575L14.8716 9.23085L15.0801 8.88831L15.4375 8.6947L16.0779 8.39684L16.3758 8.32237L16.5247 8.23301L16.9417 8.14365L17.329 8.20322L17.4779 8.27769L17.6864 8.20322L17.9991 8.29258L18.1332 8.39684L18.5204 8.4713L18.8034 8.60534L18.997 8.66491L19.2055 8.81384L19.8161 9.40957L20.0246 9.75211L20.114 10.0947L20.2033 10.2883L20.3076 10.7351L20.2778 10.8393L20.3672 11.3457L20.2629 11.5542L19.9502 11.7478H19.6821L19.5034 11.8074L19.1608 11.7627L18.9374 11.8074L18.4906 11.7776L18.3268 11.8372L17.9694 11.7329L17.329 11.8223L17.0013 11.7627L16.7332 11.8818L16.3162 11.8223L16.1822 11.8967L15.5865 11.8223L15.3928 11.7329L15.1248 11.6733L15.0354 11.8074L15.3333 12.418ZM19.3097 10.7797L19.1161 10.4819L18.8778 10.0351L18.6098 9.67765L18.1183 9.30532L17.3736 9.18617H17.1204L16.9417 9.14149L16.5992 9.24575L15.8545 9.61808L15.6907 9.87126L15.512 10.0798L15.4673 10.2585L15.3035 10.6159L15.1694 10.7946L15.1248 11.0329L15.2737 11.0925L15.6162 10.9585L16.0481 10.9882L16.4503 10.9585L16.9864 10.8989L17.4779 10.9436L17.9843 11.0031L18.3715 10.9585L18.6396 10.884L19.28 11.0925L19.3842 10.9585L19.3097 10.7797ZM29.4164 8.9181L29.2675 9.09681L29.2079 9.46914L29.0441 9.79679L28.7611 10.1393V10.5712L28.5675 10.8095L28.359 11.3606L28.2845 11.4499L28.0015 12.1201L27.6739 12.6414L27.5101 13.2967L27.4952 13.4605L27.2569 13.8626L27.0484 14.2647L26.9143 14.5924L26.6612 14.786L26.1846 14.8605H25.7527L25.3952 14.5924L25.3059 14.2796L25.1718 14.0562L24.9782 13.8477L24.8442 13.4158L24.8591 13.252L24.6953 12.9244L24.3676 12.3882L24.2782 12.0308L24.0697 11.7925L24.0102 11.3904L23.8463 11.0627L23.757 11.0329L23.6825 10.6606L23.5038 10.0798L23.2357 9.67765L23.191 9.49893L23.0272 9.20107L22.9676 8.9032L22.8634 8.62023L23.1315 8.39684L23.3549 8.36705L23.8612 8.48619L24.2187 8.94788L24.3229 9.30532L24.4719 9.52872V9.70744L24.6953 10.1393L24.6655 10.2287L24.8144 10.5117L25.1867 11.3159L25.2463 11.5542L25.425 11.8223L25.5144 12.2244L25.6335 12.6414L25.9016 13.2073L25.8718 13.2818L26.0654 13.7733L26.1101 13.9967H26.2888L26.2739 13.8626L26.3782 13.386L26.5122 13.0286L26.5569 12.7903L26.8101 12.4478L27.0037 11.6882L27.2569 11.2563L27.2271 11.0776L27.5994 10.4968L27.6888 10.1393V10.0202L27.8824 9.67765L28.0462 9.15639L28.1207 9.06703L28.3888 8.57555L28.5228 8.45641L28.9994 8.36705L29.3419 8.48619L29.4909 8.62023L29.4164 8.9181ZM37.9593 14.3392L37.9146 14.5179L37.9444 14.6222L37.7805 14.8158L37.438 14.8605L37.2146 14.786L36.9167 14.8158H36.2019L35.9636 14.8903L35.7253 14.8456L35.0402 14.9052L34.3998 14.8307H34.087L33.7892 14.9052L33.5956 14.8754L33.0296 14.8307L32.7466 14.9052L32.4488 14.8754L32.2403 14.6371L32.2701 14.2201L32.419 14.0116L33.0743 13.8477H33.4317L33.6849 13.8775H34.0126L34.4743 13.9371L34.6083 13.9073L34.7274 13.8031L34.6083 13.535L34.5785 13.3563L34.6083 12.9839L34.5487 12.701L34.6381 12.418L34.5785 12.1499V11.4797L34.6381 11.0329L34.5785 10.4819L34.6232 10.1989L34.5934 9.84147L34.6977 9.5585V9.33511L34.6083 9.23085L34.3402 9.27553L34.0424 9.36489L33.7594 9.40957L33.4317 9.33511L33.2232 9.37979H32.5381L32.3147 9.32021L32.285 8.87342L32.2254 8.60534L32.4935 8.35216L32.7169 8.32237L33.1637 8.41173L33.3424 8.36705H34.0275L34.0424 8.38194H34.5189L34.6232 8.27769L35.1296 8.35216L35.2189 8.30748L35.7402 8.41173L35.8444 9.15639L35.7849 9.58829L35.7402 10.2287L35.7849 10.5563V11.3308L35.7402 11.3904L35.7849 11.9563L35.7402 12.0903L35.8444 12.701L35.77 13.1329V13.535L35.6955 13.7584L35.8742 13.8924L36.0827 13.9371L36.4253 13.8626H36.8721L37.5125 13.818L37.7954 13.8626L37.8997 13.9818L37.9593 14.3392ZM35.9487 5.6416V6.01393L35.8444 6.34158L35.7551 6.74369L35.487 6.83305L35.2189 6.87773L34.7423 6.77348L34.5636 6.65433L34.4743 6.43094L34.4445 6.11818L34.4743 6.0735V5.79053L34.653 5.49267L34.8913 5.34373H35.5019L35.9487 5.6416ZM47.0234 13.0137V13.0286L46.9638 13.3265L46.934 13.6839L46.6213 14.1009L46.2787 14.4435L45.5043 14.8605H45.2362L44.4171 14.9945H43.6128L43.4043 14.9498L43.0022 14.92L42.7788 14.8307H42.5852L42.0193 14.6371L41.6767 14.2945L41.6321 14.2052L41.3342 13.8775L41.2448 13.7435L41.1257 13.3414L41.0214 13.0882L41.0363 12.8648L41.2002 12.7605L41.4087 12.7754L41.9895 12.8201L42.1384 12.9541L42.2725 13.252L42.4959 13.5946L42.749 13.7733L43.1065 13.8626L43.4341 13.9967L43.8809 13.9222H44.2681L44.7 14.0413L45.4149 13.818L45.6532 13.6094L45.7128 13.4009L45.817 13.2073L45.7872 12.8946L45.7277 12.7307L45.2809 12.3733L45.1171 12.3286L45.0277 12.2691L44.7596 12.2244L44.1639 12.0308L43.9405 12.001H43.5384L43.032 11.8521L42.8831 11.8372L42.2725 11.5393L41.7363 11.3159L41.5129 11.0776L41.1555 10.4819L41.1257 10.0351L41.2002 9.60318L41.3342 9.45425L41.5129 9.03724L41.6618 8.84363L41.9001 8.63513L42.198 8.53087L42.2874 8.42662L42.5554 8.35216L42.9724 8.30748L43.3448 8.23301L43.5831 8.21812L43.8362 8.12876L44.3426 8.23301L44.5958 8.17344L45.1766 8.41173L45.4447 8.44152L46.0106 8.78406L46.1149 8.9032L46.3532 9.03724L46.5021 9.36489L46.6957 9.60318L46.7553 10.0202L46.7106 10.0798L46.4723 10.2585L46.0255 10.2138L45.5639 10.0202L45.4298 9.72233L44.9979 9.36489L44.5213 9.21596L44.3277 9.23085L43.8511 9.14149L43.3448 9.27553L42.7341 9.40957L42.4661 9.58829L42.332 9.81169L42.3618 9.97551L42.3469 10.1691L42.4363 10.3925L42.5703 10.4968L42.8235 10.6904L43.3597 10.8542L43.7916 10.9138L44.0447 11.0031L44.2235 10.9734L45.1766 11.2414L45.4447 11.2712L45.5936 11.3904L45.9958 11.4499L46.2787 11.6733L46.5468 11.8074L46.8149 12.1648L47.0532 12.7307L47.0234 13.0137ZM55.3131 14.8605L55.0301 14.9945L54.7471 14.92L54.2854 15.0392L53.6152 14.9796L53.0195 14.8754L52.4983 14.6818L52.2897 14.503L52.1259 14.235L51.8727 13.9967L51.6344 13.2967V11.2116L51.6791 11.0329L51.5898 10.6606L51.6642 10.5117L51.56 10.2138L51.6791 9.97551L51.6493 9.52872L51.8132 9.36489L51.6791 9.18617L51.3813 9.32021L50.994 9.36489L50.6217 9.32021L50.3834 9.36489L50.2345 9.35L49.5345 9.30532L49.4452 9.09681L49.4005 8.76917L49.4452 8.4713L49.6239 8.38194L49.9366 8.41173H50.6217L50.8153 8.38194H51.3962L51.6642 8.53087L51.8281 8.38194L51.6493 8.12876L51.6047 7.65218V7.22028L51.6642 6.87773L51.5898 6.46072L51.694 6.11818L51.6344 5.79053V5.4182L52.111 5.35863H52.5876L52.7663 5.50756L52.7961 5.87989L52.7217 6.26711L52.7663 6.62455V7.93515L52.5876 8.29258L52.7217 8.4713L52.9599 8.39684L53.794 8.32237L54.0769 8.36705L54.2408 8.32237L54.7471 8.42662L55.0599 8.32237L55.4918 8.38194H55.6705L55.879 8.59045L55.9237 8.70959L55.9535 9.08192L55.7748 9.23085L55.0301 9.33511L54.8812 9.40957L54.5237 9.29043L53.8684 9.42446L53.4961 9.37979L53.2578 9.40957L52.7812 9.14149L52.6472 9.33511L52.811 9.88615V10.2734L52.7663 10.4819V11.1521L52.7217 11.2712L52.8259 11.6882L52.7365 12.3286V12.5222L52.9153 13.3414L52.9748 13.4456L53.1387 13.5946L53.3472 13.8775L53.5706 13.8924L53.794 13.9967L54.3897 13.952L54.6876 13.9967L55.0003 13.9371L55.2982 13.8031L55.6407 13.8477L55.7896 14.2945L55.6854 14.5626L55.6556 14.7115L55.3131 14.8605ZM65.0474 14.9052L65.0325 14.9498L64.6899 14.9796L64.4963 14.9647L64.0793 14.9945L63.8112 14.9498L63.5283 14.786L63.3942 14.5328L63.3198 14.235L63.2155 14.1307L62.9474 14.3988H62.8134L62.5602 14.6371L62.1283 14.7562L61.89 14.9052L61.7113 14.8903L61.3837 15.0243H60.9666L60.2071 14.9498L59.6561 14.7413L59.4922 14.6222L59.4029 14.4881L59.0901 14.3243L58.822 13.8924L58.6582 13.3265V12.6861L59.1646 11.9712L59.2093 11.8669L59.388 11.6733L59.7156 11.584L60.4007 11.3755L60.5496 11.301H61.1454L61.3539 11.3308H61.6219L61.8007 11.3755L61.9794 11.3606H62.3964L62.724 11.4499L63.1411 11.6287L63.2155 11.5393L63.1559 11.4053L63.0964 11.0925L63.1411 10.4223L63.0368 10.1989V9.94573L62.8432 9.63297L62.5304 9.42446L62.2624 9.20107L61.5773 9.15639L60.9964 9.21596L60.505 9.36489L60.222 9.67765L60.0731 10.184L59.939 10.3627L59.6412 10.5563H59.388L59.239 10.5266L58.9859 10.4223L58.9263 10.2138V9.88615L59.0305 9.67765L59.0603 9.51382L59.3582 9.00746L59.7752 8.63513L59.9986 8.51598L60.3858 8.42662L60.4454 8.32237L61.1156 8.2628H61.7858L62.2772 8.18833L62.6645 8.29258L62.9772 8.42662L63.2602 8.50109L63.573 8.76917L63.8559 9.06703L64.0346 9.37979L64.0942 9.54361L64.258 9.97551L64.1985 10.3776L64.3176 10.75L64.3772 11.0776L64.3176 11.4797L64.3921 11.9712L64.2878 12.3584V13.2371L64.3176 13.6243L64.4219 13.9371L64.7346 14.0413L65.1516 13.952L65.3452 14.0116L65.4197 14.3094L65.3899 14.6669L65.241 14.8307L65.0474 14.9052ZM59.8646 13.1478V13.4307L60.1028 13.7137V13.7435L60.4752 13.9073L60.7581 14.0116H61.1603L61.5922 13.9818L62.1283 13.9073L62.3219 13.8031L62.5751 13.7435L62.7985 13.6392L63.1411 13.5797L63.2751 13.4307V13.3414L63.1708 12.969L63.2602 12.4478L63.1113 12.2393H62.7538L62.3815 12.284L62.173 12.1797L61.8156 12.2393L61.7858 12.135L61.1454 12.284H60.8475L60.1773 12.4627L59.9688 12.6712L59.8646 13.1478Z" />
            <path d="M6.93042 56.973C10.758 56.973 13.8608 54.1679 13.8608 50.7077C13.8608 47.2474 10.758 44.4423 6.93042 44.4423C3.10286 44.4423 0 47.2474 0 50.7077C0 54.1679 3.10286 56.973 6.93042 56.973Z" />
        </svg>
    )
}

export default MarteLogo;