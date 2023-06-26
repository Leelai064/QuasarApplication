  <template>
    <q-dialog v-model="isVisible" @hide="$emit('close')">
        <q-stepper
            v-model="step"
            ref="stepper"
            animated
            header-nav
            vertical
            class="bg-dark borderSecondary text-secondary text-body1"
            dark
            ><q-step
            done-color="secondary"
            active-color="secondary"
            :done="step > 1"
            title="Kits"
            :name="1"
            ><div class="col q-my-md">
                <q-img
                style="min-width: 200px; min-height: 200px"
                src="https://puu.sh/Injem/a994ede0c0.jpg"
                />
            </div>
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Starter Kits</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <p>Each starter kit comes with the following:</p>
                <ul class="no-margin">
                    <li>1 PiShock Hub</li>
                    <li>1 Shocker</li>
                    <li>1 Black Strap - 17 inches long.</li>
                    <li>1 Shocker Charging Cable</li>
                </ul>
                </div>
                <div class="row justify-around q-my-md">
                <span v-if="sellPlus"
                    >What model do you want? Read warning below.</span
                >
                <span v-else>What model do you want? Read warning below.</span>
                </div>
                <div class="row justify-around q-my-md">
                <div class="column">
                    <div class="row justify-center items-center q-gutter-md">
                    <span>Standard PiShock</span>
                    </div>
                    <div class="row justify-center items-center q-gutter-md">
                    <q-btn
                        @click="decreaseKitsLite"
                        round
                        icon="mdi-minus"
                    />
                    <span>{{ kitsLite }}</span>
                    <q-btn
                        @click="increaseKitsLite"
                        round
                        icon="mdi-plus"
                    />
                    </div>
                    <div
                    class="row justify-center items-center q-my-md column text-h6"
                    >
                    <span v-if="currencySupported === false"
                        >CA${{ kitLitePrice }}</span
                    ><span v-if="currencySupported" class="text-warning"
                        >~{{ conversionRate(kitLitePrice)
                        }}{{ userInfo.currency.symbol }}
                        {{ userInfo.currency.code }}</span
                    >
                    </div>
                </div>
                <div class="column" v-if="sellPlus">
                    <div class="row justify-center items-center q-gutter-md">
                    <span>PiShock Plus</span>
                    </div>
                    <div class="row justify-center items-center q-gutter-md">
                    <q-btn
                        @click="decreaseKits"
                        round
                        icon="mdi-minus"
                    />
                    <span>{{ kits }}</span>
                    <q-btn
                        @click="increaseKits"
                        round
                        icon="mdi-plus"
                    />
                    </div>
                    <div
                    class="row justify-center items-center q-my-md column text-h6"
                    >
                    <span v-if="currencySupported === false"
                        >CA${{ kitPrice }}</span
                    ><span v-if="currencySupported" class="text-warning"
                        >{{ conversionRate(kitPrice)
                        }}{{ userInfo.currency.symbol }}
                        {{ userInfo.currency.code }}</span
                    >
                    </div>
                </div>
                </div>
                <div
                v-if="sellPlus"
                class="row justify-around q-my-md text-warning text-bold"
                >
                If you do not need Buttplug.io to control other toys, ignore the
                Plus as it offers nothing more.
                </div>
            </div></q-step
            ><q-step
            :name="2"
            done-color="secondary"
            active-color="secondary"
            :done="step > 2"
            title="Extra Shockers"
            ><div class="col q-my-md">
                <q-img src="https://puu.sh/I3s1g/2e39e68fea.png" />
            </div>
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Extra Shockers</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <p>
                    Extra shockers will allow you to wear more then one shocker at
                    the same time in different places.
                </p>
                <p>The Shockers are water resistant.</p>
                <p>Each Shocker comes with a strap and a charging cable.</p>
                <p>
                    Straps are 17 inches long, 3/4th inches wide and are black.
                </p>
                </div>
                <div class="row justify-center items-center q-mb-md column text-h6">
                <span>CA${{ shockerPrice }}</span>
                <span v-if="currencySupported"
                    >{{ conversionRate(shockerPrice)
                    }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                >
                </div>
                <div class="row justify-center items-center q-gutter-md q-mb-md">
                <q-btn
                    @click="decreaseShockers"
                    round
                    icon="mdi-minus"
                />
                <span>{{ shockers }}</span>
                <q-btn
                    @click="increaseShockers"
                    round
                    icon="mdi-plus"
                />
                </div>
                <div class="row">
                <p class="text-caption">
                    It is not recommended to wear shockers on the neck or anywhere
                    around the chest or spine. Good locations are the crotch, the
                    ankles, the calves, the taint and the sides.
                </p>
                </div>
            </div></q-step
            ><q-step
            :name="3"
            done-color="secondary"
            active-color="secondary"
            :done="step > 3"
            title="Spacers"
            ><div class="col q-my-md">
                <q-img
                src="https://pishockcdn.nyc3.cdn.digitaloceanspaces.com/images%2FIMG_1295.jpg"
                />
            </div>
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Spacers</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <p>
                    Spacers increase the surface area and make wearing more
                    comfortable.
                </p>
                <p>
                    Additionally, paired with the locking customs straps offered
                    later, they can prevent turning off or removing the shocker.
                </p>
                </div>
                <div class="row justify-center items-center q-mb-md column text-h6">
                <span>CA${{ spacersPrice }}</span>
                <span v-if="currencySupported"
                    >{{ conversionRate(spacersPrice)
                    }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                >
                </div>
                <div class="row justify-center items-center q-gutter-md q-mb-md">
                <q-btn
                    @click="decreaseSpacers"
                    round
                    icon="mdi-minus"
                />
                <span>{{ spacers }}</span>
                <q-btn
                    @click="increaseSpacers"
                    round
                    icon="mdi-plus"
                />
                </div></div></q-step
            ><q-step
            done-color="secondary"
            active-color="secondary"
            :done="step > 4"
            :name="4"
            title="Offline Remote"
            ><div class="col q-my-md">
                <q-img src="https://puu.sh/I3s0f/262fa1dd1c.png" />
            </div>
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Offline Remote</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <p>
                    The PiShock requires an internet connection to be used. If you
                    wish to be able to use a shocker without it for whatever reason,
                    buy an offline remote. It can pair with 2 shockers at once.
                </p>
                </div>
                <div class="row justify-center items-center q-mb-md column text-h6">
                <span v-if="currencySupported === false"
                    >CA${{ remotePrice }}</span
                >
                <span v-if="currencySupported" class="text-warning"
                    >{{ conversionRate(remotePrice)
                    }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                >
                </div>
                <div class="row justify-center items-center q-gutter-md">
                <q-btn-toggle
                    v-model="remote"
                    spread
                    no-caps
                    rounded
                    unelevated
                    size="md"
                    toggle-color="secondary"
                    color="dark"
                    toggle-text-color="dark"
                    text-color="secondary"
                    :options="[
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 }
                    ]"
                />
                <p hidden class="text-warning">Temporarily out of stock.</p>
                </div>
            </div></q-step
            ><q-step
            done-color="secondary"
            active-color="secondary"
            :done="step > 5"
            :name="5"
            title="Rush"
            >
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Rush Manufacturing</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <div>
                    <p>
                    I have a big backlog. To alleviate those who wants it faster,
                    I offer rush.
                    </p>
                    <p>Standard Order: 2 - 4 weeks</p>
                    <p>
                    Rush Order: Usually 1-3 days. If out of stock, as soon as it
                    arrives.
                    </p>
                </div>
                </div>
                <div class="row justify-center items-center q-mb-md column text-h6">
                <span v-if="currencySupported === false">CA${{ rushPrice }}</span>
                <span v-if="currencySupported" class="text-warning"
                    >{{ conversionRate(rushPrice) }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                >
                </div>
                <div class="row justify-center items-center q-gutter-md">
                <q-btn-toggle
                    v-model="rush"
                    spread
                    no-caps
                    rounded
                    unelevated
                    size="md"
                    toggle-color="secondary"
                    color="dark"
                    toggle-text-color="dark"
                    text-color="secondary"
                    :options="[
                    { label: 'No', value: 0 },
                    { label: 'Yes', value: 1 }
                    ]"
                />
                </div>
                <div class="q-mt-md">
                <p class="text-warning">
                    Rush isn't shipping speed but production. Shipping speed is
                    selected at checkout.
                </p>
                </div>
            </div></q-step
            ><q-step
            v-if="false"
            done-color="secondary"
            active-color="secondary"
            :done="step > 6"
            :name="6"
            title="From Germany?"
            >
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >From Germany?</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <div>
                    <p>
                    Are you from Germany? If so check below. You will be charged
                    duties and taxes up front as the package will be routed
                    through a broker due to Germany's customs being troublesome.
                    </p>
                    <p>
                    You will not be paying more than what you would already have
                    paid, but we will handle customs for you.
                    </p>
                </div>
                </div>
                <div class="row justify-center items-center q-mb-md column text-h6">
                <span v-if="currencySupported === false"
                    >CA${{ germanyDutiesAmount }}</span
                >
                <span v-if="currencySupported" class="text-warning"
                    >{{ conversionRate(germanyDutiesAmount)
                    }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                >
                </div>
                <div class="row justify-center items-center q-gutter-md">
                <q-btn-toggle
                    v-model="isGermany"
                    spread
                    no-caps
                    rounded
                    unelevated
                    size="md"
                    toggle-color="secondary"
                    color="dark"
                    toggle-text-color="dark"
                    text-color="secondary"
                    :options="[
                    { label: 'No', value: false },
                    { label: 'Yes', value: true }
                    ]"
                />
                </div>
                <div class="q-mt-md">
                <p class="text-warning">
                    Failure to be accurate will result in delays as I cannot ship
                    without arranging this. I keep none of this money.
                </p>
                </div>
            </div></q-step
            ><q-step
            v-if="false"
            done-color="secondary"
            active-color="secondary"
            :done="step > 7"
            title="PiVault"
            :name="7"
            >
            <div class="col">
                <div class="row q-my-md">
                <q-img
                    style="min-width: 200px; max-height:250px; min-height: 200px"
                    src="https://puu.sh/IVWt9/5ae25d8edf.png"
                />
                </div>
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >PiVault</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <div>
                    <p>
                    Interested in chastity? The Pivault might be for you. An
                    electronic lockbox for key storage made for adult play.
                    </p>
                    <div class="row justify-center q-my-sm">
                    <q-btn
                        label="Learn More"
                        type="a"
                        outline
                        target="_blank"
                        href="https://pishock.com/#/?product=pivault"
                    />
                    </div>
                    <p>Each pivault come with the following:</p>
                    <ul class="no-margin">
                    <li>1 Pivault</li>
                    </ul>
                </div>
                </div>
                <div class="row justify-center items-center q-my-md column text-h6">
                <span v-if="currencySupported === false"
                    >CA${{ pivaultPrice }}</span
                ><span v-if="currencySupported" class="text-warning"
                    >{{ conversionRate(pivaultPrice)
                    }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                >
                </div>
                <div
                v-if="false"
                class="row justify-center items-center q-gutter-md"
                >
                <q-btn
                    @click="decreasePivaults"
                    round
                    icon="mdi-minus"
                />
                <span>{{ pivaults }}</span>
                <q-btn
                    @click="increasePivaults"
                    round
                    icon="mdi-plus"
                />
                </div>
                <div class="row justify-center items-center q-gutter-md">
                <span class="text-warning text-body2"
                    >The PiVault is Temporarily unavailable. Apologies.</span
                >
                </div>
            </div></q-step
            ><q-step
            done-color="secondary"
            active-color="secondary"
            :done="step > 8"
            :name="8"
            title="Note, Ref and Discount"
            >
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Comments</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <q-input
                    standout
                    color="secondary"
                    v-model="note"
                    class="full-width"
                />
                </div>
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Referral</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <q-input
                    standout
                    color="secondary"
                    hint="Where did you hear about us?"
                    v-model="reference"
                    dark
                    class="full-width"
                />
                </div>
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Discount Code</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <q-input
                    standout
                    color="secondary"
                    v-model="discount"
                    class="full-width"
                />
                </div></div></q-step
            ><q-step
            done-color="secondary"
            active-color="secondary"
            :done="step > 9"
            :name="9"
            title="Strap and Checkout"
            ><div class="col q-my-md">
                <q-img src="https://puu.sh/HQ3d4/6921d17b25.jpg" />
            </div>
            <div class="col">
                <div class="row">
                <q-item class="full-width no-padding"
                    ><q-item-section
                    ><q-item-label
                        class="text-grey-5"
                        overline
                        style="font-size: 20px"
                        >Straps</q-item-label
                    ><q-separator
                        color="grey-7"
                        class="full-width"
                        size="5px"/></q-item-section
                ></q-item>
                <p>A feel for premium straps?</p>
                <p>
                    I work with someone to make available some high quality,
                    leather-like, lockable straps that are customizable in length.
                </p>
                <p>
                    It is bought separately, but if interested, click the button
                    below.
                </p>
                </div>
                <div class="row justify-center items-center q-mb-md">
                <q-btn
                    label="Learn More"
                    outline
                    color="secondary"
                    href="https://pishock.com/#/straps"
                    type="a"
                    target="_blank"
                ></q-btn>
                </div>
                <div class="text-body2 text-warning q-mb-sm">
                <q-checkbox
                    color="secondary"
                    dark
                    dense
                    v-model="disclaimer_agreement"
                />
                By purchasing the PiShock you agree that you understand the risks.
                To follow safety as outlined in the documentation and that PiShock
                is not liable for any harm done. It is, after all, a shock collar
                made for dogs and repurposed, so care is required. Contact
                help@pishock.com if unsure.
                </div>
                <p class="text-negative">
                Prices at checkout are in Canadian Dollars!
                </p>
                <p class="text-warning">
                Prices at checkout are in Canadian Dollars!
                </p>
            </div></q-step
            ><template v-slot:message>
            <q-banner class="bg-warning text-dark q-px-lg column full-width">
                <div class="text-h6">
                All prices at checkout are in Canadian Dollars.
                </div>
            </q-banner>
            </template>
            <template v-slot:navigation>
            <q-stepper-navigation class="row justify-between items-center">
                <div class="text-h6 column">
                <div>
                    <span
                    v-if="checkcurrency()"
                    >CA${{ totalCost }}</span
                    >
                    <span v-if="currencySupported" class="text-warning"
                    >{{ conversionRate(totalCost)
                    }}{{ userInfo.currency.symbol }}
                    {{ userInfo.currency.code }}</span
                    >
                </div>
                <span v-if="rebate > 0" class="text-body2 no-wrap text-warning">
                    {{ rebate }}% Automatic
                </span>
                </div>
                <q-space></q-space>
                <div class="col-6 text-right">
                <q-btn
                    v-if="step < 9"
                    @click="$refs.stepper.next()"
                    color="secondary"
                    text-color="dark"
                    label="Continue"
                />
                <q-btn
                    v-show="disclaimer_agreement"
                    v-else
                    :loading="checkoutUrl === ''"
                    target="_blank"
                    type="a"
                    color="secondary"
                    text-color="dark"
                    :href="checkoutUrl"
                    label="Checkout"
                />
                <q-btn
                    v-if="!disclaimer_agreement && step === 9"
                    :loading="checkoutUrl === ''"
                    color="secondary"
                    text-color="dark"
                    label="Checkout"
                    :disable="!disclaimer_agreement"
                />
                <Partially v-if="false" :cart="checkout" />
                <q-btn
                    v-if="step > 1"
                    flat
                    text-color="secondary"
                    @click="$refs.stepper.previous()"
                    label="Back"
                    class="q-ml-sm"
                />
                </div>
            </q-stepper-navigation> </template></q-stepper
        >
    </q-dialog>
  </template>
  
  <script>
  import getSymbolFromCurrency from 'currency-symbol-map'
  import Client from 'shopify-buy'
  import Partially from '../components/Partially.vue'
  import axios from 'axios';
  import { toRaw } from 'vue'
  export default {
    props: ['startOpen','enable'],
    components: {
        Partially
    },
    data() 
    {
    return {
        isVisible: this.enable,
        step: 1,
        kits: 0,
        kitsLite: 1,
        shockers: 0,
        pivaults: 0,
        spacers: 0,
        remote: 0,
        rush: 0,
        sellPlus: false,
        note: '',
        reference: '',
        discount: '',
        checkoutUrl: '',
        disclaimer_agreement: false,
        kitPrice: 229.0,
        kitLitePrice: 140.0,
        shockerPrice: 69.0,
        rushPrice: 50.0,
        spacersPrice: 25.0,
        remotePrice: 30.0,
        dialogOpen: false,
        isGermany: false,
        client: '',
        kitProduct: '',
        kitLiteProduct: '',
        spacersProduct: '',
        shockerProduct: '',
        currency: 'CAD',
        pivaultProduct: '',
        pivaultPrice: 155.0,
        remoteProduct: '',
        rushProduct: '',
        dutiesProduct: '',
        dutiesPrice: 1.0,
        checkout: null,
        currencySupported: false,
        userInfo: null,
        currencyInfo: null,
        publicIp: '',
        campaign: '',
        rebate: 0,
        showConversionWarning: false
        }
    },
    mounted() {
        // pishock-starter-kit shocker-collar offline-remote extra-rush
        var thisVue = this
        thisVue.getIP();
        this.client = Client.buildClient({
        domain: 'pishock.myshopify.com',
        storefrontAccessToken: 'e264431ff9cb7f912b5a5f540ea5f4ab'
        })
        this.client.product.fetchByHandle('pishock-starter-kit').then(product => {
        // Do something with the product
        thisVue.kitProduct = product
        this.kitPrice = product.variants[0].priceV2.amount
        })
        this.client.product
        .fetchByHandle('new-pishock-starter-kit')
        .then(product => {
            // Do something with the product
            thisVue.kitLiteProduct = product
            this.kitLitePrice = product.variants[0].priceV2.amount
        })
        this.client.product.fetchByHandle('shocker-collar').then(product => {
        // Do something with the product
        thisVue.shockerProduct = product
        thisVue.shockerPrice = product.variants[0].priceV2.amount
        })
        this.client.product.fetchByHandle('offline-remote').then(product => {
        // Do something with the product
        thisVue.remoteProduct = product
        thisVue.remotePrice = product.variants[0].priceV2.amount
        })
        this.client.product.fetchByHandle('spacers').then(product => {
        // Do something with the product
        thisVue.spacersProduct = product
        thisVue.spacersPrice = product.variants[0].priceV2.amount
        })
        this.client.product.fetchByHandle('extra-rush').then(product => {
        // Do something with the product
        thisVue.rushProduct = product
        thisVue.rushPrice = product.variants[0].priceV2.amount
        })
        this.client.product.fetchByHandle('lockbox-preorder').then(product => {
        // Do something with the product
        thisVue.pivaultProduct = product
        this.pivaultPrice = product.variants[0].priceV2.amount
        })
        this.client.product.fetchByHandle('duties').then(product => {
        // Do something with the product
        thisVue.dutiesProduct = product
        thisVue.dutiesPrice = product.variants[0].priceV2.amount
        })
        if (this.startOpen) {
        this.dialogOpen = true
        }
        if (this.$q.cookies.has('campaign')) {
        this.campaign = this.$q.cookies.get('campaign')
        }
    },
    watch: {
      enable(newVal) {
        this.isVisible = newVal;
      },
      isVisible(newVal) {
        if (newVal !== this.enable) {
          this.$emit('update:enable', newVal);
        }
      },
      step(newVal) {
        // { presentmentCurrencyCode: 'USD' }
        var thisVue = this
        if (newVal === 9) {
            thisVue.checkout = thisVue.client.checkout.create().then(checkout => {
            thisVue.checkout = checkout
            this.generateBasket()
            })
        } else if (thisVue.checkout !== null && newVal === 9) {
            this.generateBasket()
        }
      }
    },
    methods: {
        getSymbolFromCurrency(val) {
        return getSymbolFromCurrency(val)
        },
        generateBasket() {
        this.checkoutUrl = ''
        var thisVue = this
        var basket = []
        var checkoutobject = toRaw(thisVue.checkout)
        var kitLiteProductobject = toRaw(thisVue.kitLiteProduct)
        var shockerProductobject = toRaw(thisVue.shockerProduct)
        var rushProductobject = toRaw(thisVue.rushProduct)
        var remoteProductobject = toRaw(thisVue.remoteProduct)

        var kitProductobject = toRaw(thisVue.kitProduct)
        var pivaultProductobject = toRaw(thisVue.pivaultProduct)
        var spacersProductobject = toRaw(thisVue.spacersProduct)
        var dutiesProductobject = toRaw(thisVue.dutiesProduct)

        if (checkoutobject !== null) {
            if (checkoutobject.discountApplications.length > 0) {
            thisVue.client.checkout.removeDiscount(checkoutobject.id)
            }
            var lineItems = []
            checkoutobject.lineItems.forEach(elem => {
            lineItems.push(elem.id)
            })
            if (lineItems.length > 0) {
            thisVue.client.checkout.removeLineItems(
                checkoutobject.id,
                lineItems
            )
            }
            if (thisVue.shockers > 0) {
            basket.push({
                variantId: shockerProductobject.variants[0].id,
                quantity: thisVue.shockers
            })
            }
            if (thisVue.rush > 0) {
            basket.push({
                variantId: rushProductobject.variants[0].id,
                quantity: thisVue.rush
            })
            }
            if (thisVue.remote > 0) {
            basket.push({
                variantId: remoteProductobject.variants[0].id,
                quantity: thisVue.remote
            })
            }
            if (thisVue.kits > 0) {
            basket.push({
                variantId: kitProductobject.variants[0].id,
                quantity: thisVue.kits
            })
            }
            if (thisVue.kitsLite > 0) {
            basket.push({
                variantId: kitLiteProductobject.variants[0].id,
                quantity: thisVue.kitsLite
            })
            }
            if (thisVue.pivaults > 0) {
            basket.push({
                variantId: pivaultProductobject.variants[0].id,
                quantity: thisVue.pivaults
            })
            }
            if (thisVue.spacers > 0) {
            basket.push({
                variantId: spacersProductobject.variants[0].id,
                quantity: thisVue.spacers
            })
            }
            if (thisVue.germanyDutiesAmount > 0) {
            basket.push({
                variantId: dutiesProductobject.variants[0].id,
                quantity: thisVue.germanyDutiesAmount
            })
            }
            thisVue.client.checkout
            .addLineItems(checkoutobject.id, basket)
            .then(checkout => {
                // Do something with the updated checkout
                checkoutobject = checkout
                if (thisVue.discount !== '') {
                thisVue.client.checkout.addDiscount(
                    checkoutobject.id,
                    thisVue.discount
                )
                }
                if (
                thisVue.note !== '' ||
                thisVue.reference !== '' ||
                thisVue.campaign !== ''
                ) {
                var input = {}
                if (thisVue.note !== '') {
                    input.note = thisVue.note
                }
                if (thisVue.reference !== '') {
                    if (input.customAttributes) {
                    var i = input.customAttributes.indexOf(obj =>
                        Object.keys(obj).includes('reference')
                    )
                    if (i !== -1) {
                        input.customAttributes[i].reference = thisVue.reference
                    } else {
                        input.customAttributes.push({
                        key: 'reference',
                        value: thisVue.reference
                        })
                    }
                    } else {
                    input.customAttributes = []
                    input.customAttributes.push({
                        key: 'reference',
                        value: thisVue.reference
                    })
                    }
                }
                if (thisVue.campaign !== '') {
                    if (input.customAttributes) {
                    var i2 = input.customAttributes.indexOf(obj =>
                        Object.keys(obj).includes('campaign')
                    )
                    if (i2 !== -1) {
                        input.customAttributes[i2].campaign = thisVue.campaign
                    } else {
                        input.customAttributes.push({
                        key: 'campaign',
                        value: thisVue.campaign
                        })
                    }
                    } else {
                    input.customAttributes = []
                    input.customAttributes.push({
                        key: 'campaign',
                        value: thisVue.campaign
                    })
                    }
                }
                thisVue.client.checkout.updateAttributes(
                    checkoutobject.id,
                    input
                )
                thisVue.checkout = checkoutobject
                }
                setTimeout(() => {
                thisVue.checkoutUrl = checkout.webUrl
                //console.log(thisVue.checkout)
                }, 2000)
            })
        }
        thisVue.checkout = checkoutobject
        },
        decreaseKitsLite(){
            if (this.kitsLite > 0) {
                this.kitsLite -= 1;
        }
        },
        increaseKitsLite(){
            if (this.kitsLite >= 0) {
                this.kitsLite += 1;
            }
        },
        decreaseKits(){
            if (this.kits > 0) {
                this.kits -= 1;
        }
        },
        increaseKits(){
            if (this.kits >= 0) {
            this.kits += 1;
            }
        },
        decreaseShockers(){
            if (this.shockers > 0) {
            this.shockers -= 1;
            }
        },
        increaseShockers(){
            if (this.shockers >= 0 && this.shockers < 2) {
            this.shockers += 1;
            }
        },
        decreaseSpacers(){
            if (this.spacers > 0) {
            this.spacers -= 1;
            }
        },
        increaseSpacers(){
            if (this.spacers >= 0) {
            this.spacers += 1;
            }
        },
        decreasePivaults(){
            if (this.pivaults > 0) {
            this.pivaults -= 1;
            }
        },
        increasePivaults(){
            if (this.spacers >= 0) {
            this.spacers += 1;
            }
        },
        conversionRate(val) {
        if (this.currencyInfo) {
            var cost = val * this.currencyInfo
            return this.roundNearest5(cost.toFixed(2))
        }
        },
        // getLocData() {
        //  var thisVue = this
        //  this.$axios
        //    .get(
        //      this.$vars.target +
        //        '/Login/GetUserInfo?ip=' +
        //        this.userIP.replace('.', '_'),
        //      {
        //        headers: {
        //          'Content-Type': 'application/json'
        //        }
        //      }
        //    )
        //    .then(function(response) {
        //      thisVue.userInfo = JSON.parse(response.data)
        //      console.log(thisVue.userInfo)
        //      thisVue.getCurrencyData()
        //    })
        //    .catch(function(error) {
        //      console.log(error)
        //    })
        // },
        getCurrencyData() {
        var thisVue = this
        axios
            .get(
            'https://api.currconv.com/api/v7/convert?q=CAD_' +
                this.userInfo.currency.code +
                '&compact=ultra&apiKey=28ac38e4acaf4e35846d873b09acc446',
            {
                headers: {
                'Content-Type': 'application/json'
                }
            }
            )
            .then(function(response) {
            var cur = 'CAD_' + thisVue.userInfo.currency.code
            thisVue.currencyInfo = response.data[cur]
            if (thisVue.userInfo.currency !== 'CAD') {
                thisVue.currencySupported = true
            }
            })
            .catch(function(error) {
            //console.log(error)
            })
        },
        roundNearest5(num) {
        return Math.ceil(num / 5) * 5
        },
        checkcurrency(){
        var thisVue = this
        return thisVue.userInfo.currency.code === 'CAD' || thisVue.userInfo.currency.code === undefined
        },
        getIP() 
        {
            var thisVue = this
            thisVue.step = 1
            if (this.userInfo === null || this.userInfo === '') 
            {
                //remove later
                let sameplereturn = {"ip":"104.58.3.73","time_zone":{"id":"America/Chicago","gmt_offset":-18000,"code":"CDT","is_daylight_saving":true},"currency":{"code":"USD","name":"US Dollar","plural":"US dollars","symbol":"$","symbol_native":"$"}};
                if (sameplereturn.currency) {
                    thisVue.userInfo = sameplereturn
                    thisVue.currency = sameplereturn.currency.code
                    if (sameplereturn.currency.code !== 'CAD') {
                            thisVue.getCurrencyData()
                    }
                } else {
                    thisVue.userInfo = { currency: { code: 'CAD' } }
                    thisVue.currency = 'CAD'
                }
                // axios
                // .get(this.$vars.target + '/Login/GetLocation', {
                //     headers: {
                //     'Content-Type': 'application/json'
                //     }
                // })
                // .then(function(answer) 
                // {
                //     //console.log(answer.data)
                //     if (answer.data.currency) {
                //         thisVue.userInfo = answer.data
                //         thisVue.currency = answer.data.currency.code
                //         if (answer.data.currency.code !== 'CAD') {
                //             thisVue.getCurrencyData()
                //     }
                //     } else {
                //     thisVue.userInfo = { currency: { code: 'CAD' } }
                //     thisVue.currency = 'CAD'
                //     }
                // })
                // .catch(function(error) {
                //     //console.log(error)
                //     thisVue.showConversionWarning = true
                // })
            }
        }
    },
    computed: {
        totalCost() {
        return (
            this.kits * this.kitPrice +
            this.kitsLite * this.kitLitePrice +
            this.shockers * this.shockerPrice +
            this.remote * this.remotePrice +
            this.rush * this.rushPrice +
            this.spacers * this.spacersPrice +
            this.pivaults * this.pivaultPrice +
            this.germanyDutiesAmount * this.dutiesPrice -
            ((this.kits * this.kitPrice +
            this.kitsLite * this.kitLitePrice +
            this.shockers * this.shockerPrice +
            this.spacers * this.spacersPrice +
            this.remote * this.remotePrice +
            this.pivaults * this.pivaultPrice +
            this.rush * this.rushPrice) *
            this.rebate) /
            100
        )
        },
        totalShipped() {
        return (
            this.kits * this.kitPrice +
            this.kitsLite * this.kitLitePrice +
            this.shockers * this.shockerPrice +
            this.spacers * this.spacersPrice +
            this.pivaults * this.pivaultPrice +
            this.remote * this.remotePrice -
            ((this.kits * this.kitPrice +
            this.kitsLite * this.kitLitePrice +
            this.spacers * this.spacersPrice +
            this.shockers * this.shockerPrice +
            this.pivaults * this.pivaultPrice +
            this.remote * this.remotePrice) *
            this.rebate) /
            100
        )
        },
        germanyDuties() {
        var checkValue = this.totalShipped * 0.02
        if (checkValue > 20) {
            return Math.ceil(this.totalShipped * 0.23)
        } else {
            return Math.ceil(this.totalShipped * 0.21 + 20)
        }
        },
        presentmentCurrencyCode() {
        if (
            this.userInfo &&
            this.userInfo.currency &&
            this.userInfo.currency.code
        ) {
            return this.userInfo.currency.code
        } else {
            return 'CAD'
        }
        },
        germanyDutiesAmount() {
        if (this.isGermany) {
            return this.germanyDuties
        } else {
            return 0
        }
        }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .docsTable {
    background-color: #f2f2f2;
  }
  </style>
  