import { View, Property, booleanConverter } from "tns-core-modules/ui/core/view";
import * as observableModule from "tns-core-modules/data/observable";

export namespace ScaleType {
    export const Center = "center";
    export const CenterCrop = "centerCrop";
    export const CenterInside = "centerInside";
    export const FitCenter = "fitCenter";
    export const FitEnd = "fitEnd";
    export const FitStart = "fitStart";
    export const FitXY = "fitXY";
    export const FocusCrop = "focusCrop";
}

export interface AnimatedImage {
    start(): void;
    stop(): void;
    isRunning(): boolean;
}

export interface ImageInfo {
    getHeight(): number;
    getWidth(): number;
}

export interface FrescoError {
    getMessage(): string;
    getErrorType(): string;
    toString(): string;
}

export interface ImagePipelineConfigSetting {
    isDownsampleEnabled?: boolean;
}

export class EventData implements observableModule.EventData {
    private _eventName: string;
    private _object: any;

    get eventName(): string {
        return this._eventName;
    }

    set eventName(value: string) {
        this._eventName = value;
    }

    get object(): any {
        return this._object;
    }

    set object(value: any) {
        this._object = value;
    }
}

export class FrescoDrawee extends View {
    public static finalImageSetEvent: string = "finalImageSet";
    public static failureEvent: string = "failure";
    public static intermediateImageFailedEvent: string = "intermediateImageFailed";
    public static intermediateImageSetEvent: string = "intermediateImageSet";
    public static releaseEvent: string = "release";
    public static submitEvent: string = "submit";

    public imageUri: string;
    public placeholderImageUri: string;
    public failureImageUri: string;
    public actualImageScaleType: string;
    public fadeDuration: number;
    public backgroundUri: string;
    public progressiveRenderingEnabled: boolean;
    public showProgressBar: boolean;
    public progressBarColor: string;
    public roundAsCircle: boolean;
    public roundBottomRight: boolean;
    public roundTopLeft: boolean;
    public roundTopRight: boolean;
    public roundBottomLeft: boolean;
    public roundedCornerRadius: number;
    public autoPlayAnimations: boolean;
    public tapToRetryEnabled: boolean;
    public aspectRatio: number;
    public decodeWidth: number;
    public decodeHeight: number;

    public static imageUriProperty = new Property<FrescoDrawee, string>(
        {
            name: "imageUri",
            defaultValue: undefined,
            valueConverter: (v) => v,
            valueChanged: (target, oldValue, newValue) => {
                target.onImageUriPropertyChanged(oldValue, newValue);
            },
        });

    public static placeholderImageUriProperty = new Property<FrescoDrawee, string>(
        {
            name: "placeholderImageUri",
            defaultValue: undefined,
            valueConverter: (v) => v,
            valueChanged: (target, oldValue, newValue) => {
                target.onPlaceholderImageUriPropertyChanged(oldValue, newValue);
            },
        });

    public static failureImageUriProperty = new Property<FrescoDrawee, string>(
        {
            name: "failureImageUri",
            defaultValue: undefined,
            valueConverter: (v) => v,
            valueChanged: (target, oldValue, newValue) => {
                target.onFailureImageUriPropertyChanged(oldValue, newValue);
            },
        });

    public static actualImageScaleTypeProperty = new Property<FrescoDrawee, string>(
        {
            name: "actualImageScaleType",
            defaultValue: undefined,
            valueConverter: (v) => v,
            valueChanged: (target, oldValue, newValue) => {
                target.onActualImageScaleTypePropertyChanged(oldValue, newValue);
            },
        });

    public static fadeDurationProperty = new Property<FrescoDrawee, number>(
        {
            name: "fadeDuration",
            defaultValue: undefined,
            valueConverter: (v) => parseFloat(v),
            valueChanged: (target, oldValue, newValue) => {
                target.onFadeDurationPropertyChanged(oldValue, newValue);
            },
        });

    public static backgroundUriProperty = new Property<FrescoDrawee, string>(
        {
            name: "backgroundUri",
            defaultValue: undefined,
            valueConverter: (v) => v,
            valueChanged: (target, oldValue, newValue) => {
                target.onBackgroundUriPropertyChanged(oldValue, newValue);
            },
        });

    public static progressiveRenderingEnabledProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "progressiveRenderingEnabled",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            valueChanged: (target, oldValue, newValue) => {
                target.onProgressiveRenderingEnabledPropertyChanged(oldValue, newValue);
            },
        });

    public static showProgressBarProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "showProgressBar",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            valueChanged: (target, oldValue, newValue) => {
                target.onShowProgressBarPropertyChanged(oldValue, newValue);
            },
        });

    public static progressBarColorProperty = new Property<FrescoDrawee, string>(
        {
            name: "progressBarColor",
            defaultValue: undefined,
            valueConverter: (v) => v,
            valueChanged: (target, oldValue, newValue) => {
                target.onProgressBarColorPropertyChanged(oldValue, newValue);
            },
        });

    public static roundAsCircleProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "roundAsCircle",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            affectsLayout: true,
            valueChanged: (target, oldValue, newValue) => {
                target.onRoundAsCirclePropertyChanged(oldValue, newValue);
            },
        });

    public static roundTopLeftProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "roundTopLeft",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            affectsLayout: true,
            valueChanged: (target, oldValue, newValue) => {
                target.onRoundTopLeftPropertyChanged(oldValue, newValue);
            },
        });

    public static roundTopRightProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "roundTopRight",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            affectsLayout: true,
            valueChanged: (target, oldValue, newValue) => {
                target.onRoundTopRightPropertyChanged(oldValue, newValue);
            },
        });

    public static roundBottomLeftProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "roundBottomLeft",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            valueChanged: (target, oldValue, newValue) => {
                target.onRoundBottomLeftPropertyChanged(oldValue, newValue);
            },
        });

    public static roundBottomRightProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "roundBottomRight",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            valueChanged: (target, oldValue, newValue) => {
                target.onRoundBottomRightPropertyChanged(oldValue, newValue);
            },
        });

    public static roundedCornerRadiusProperty = new Property<FrescoDrawee, number>(
        {
            name: "roundedCornerRadius",
            defaultValue: undefined,
            valueConverter: (v) => parseFloat(v),
            valueChanged: (target, oldValue, newValue) => {
                target.onRoundedCornerRadiusPropertyChanged(oldValue, newValue);
            },
        });

    public static autoPlayAnimationsProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "autoPlayAnimations",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            valueChanged: (target, oldValue, newValue) => {
                target.onAutoPlayAnimationsPropertyChanged(oldValue, newValue);
            },
        });

    public static tapToRetryEnabledProperty = new Property<FrescoDrawee, boolean>(
        {
            name: "tapToRetryEnabled",
            defaultValue: undefined,
            valueConverter: booleanConverter,
            valueChanged: (target, oldValue, newValue) => {
                target.onTapToRetryEnabledPropertyChanged(oldValue, newValue);
            },
        });

    public static aspectRatioProperty = new Property<FrescoDrawee, number>(
        {
            name: "aspectRatio",
            defaultValue: undefined,
            valueConverter: (v) => parseFloat(v),
            valueChanged: (target, oldValue, newValue) => {
                target.onAspectRatioPropertyChanged(oldValue, newValue);
            },
        });

    public static decodeWidthProperty = new Property<FrescoDrawee, number>(
        {
            name: "decodeWidth",
            defaultValue: undefined,
            valueConverter: (v) => parseFloat(v),
            valueChanged: (target, oldValue, newValue) => {
                target.onDecodeWidthPropertyChanged(oldValue, newValue);
            },
        });

    public static decodeHeightProperty = new Property<FrescoDrawee, number>(
        {
            name: "decodeHeight",
            defaultValue: undefined,
            valueConverter: (v) => parseFloat(v),
            valueChanged: (target, oldValue, newValue) => {
                target.onDecodeHeightPropertyChanged(oldValue, newValue);
            },
        });

    private onImageUriPropertyChanged(oldValue: string, newValue: string) {
        this.onImageUriChanged(oldValue, newValue);
    }

    private onPlaceholderImageUriPropertyChanged(oldValue: string, newValue: string) {
        this.onPlaceholderImageUriChanged(oldValue, newValue);
    }

    private onFailureImageUriPropertyChanged(oldValue: string, newValue: string) {
        this.onFailureImageUriChanged(oldValue, newValue);
    }

    private onActualImageScaleTypePropertyChanged(oldValue: string, newValue: string) {
        this.onActualImageScaleTypeChanged(oldValue, newValue);
    }

    private onFadeDurationPropertyChanged(oldValue: number, newValue: number) {
        this.onFadeDurationChanged(oldValue, newValue);
    }

    private onBackgroundUriPropertyChanged(oldValue: string, newValue: string) {
        this.onBackgroundUriChanged(oldValue, newValue);
    }

    private onProgressiveRenderingEnabledPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onProgressiveRenderingEnabledChanged(oldValue, newValue);
    }

    private onShowProgressBarPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onShowProgressBarChanged(oldValue, newValue);
    }

    private onProgressBarColorPropertyChanged(oldValue: string, newValue: string) {
        this.onProgressBarColorChanged(oldValue, newValue);
    }

    private onRoundAsCirclePropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onRoundAsCircleChanged(oldValue, newValue);
    }

    private onRoundTopLeftPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onRoundTopLeftChanged(oldValue, newValue);
    }

    private onRoundTopRightPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onRoundTopRightChanged(oldValue, newValue);
    }

    private onRoundBottomLeftPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onRoundBottomLeftChanged(oldValue, newValue);
    }

    private onRoundBottomRightPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onRoundBottomRightChanged(oldValue, newValue);
    }

    private onRoundedCornerRadiusPropertyChanged(oldValue: number, newValue: number) {
        this.onRoundedCornerRadiusChanged(oldValue, newValue);
    }

    private onAutoPlayAnimationsPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onAutoPlayAnimationsPChanged(oldValue, newValue);
    }

    private onTapToRetryEnabledPropertyChanged(oldValue: boolean, newValue: boolean) {
        this.onTapToRetryEnabledChanged(oldValue, newValue);
    }

    private onAspectRatioPropertyChanged(oldValue: number, newValue: number) {
        this.onAspectRatioChanged(oldValue, newValue);
    }

    private onDecodeWidthPropertyChanged(oldValue: number, newValue: number) {
        this.onDecodeWidthChanged(oldValue, newValue);
    }

    private onDecodeHeightPropertyChanged(oldValue: number, newValue: number) {
        this.onDecodeHeightChanged(oldValue, newValue);
    }

    protected onImageUriChanged(oldValue: string, newValue: string) {

    }

    protected onPlaceholderImageUriChanged(oldValue: string, newValue: string) {

    }

    protected onFailureImageUriChanged(oldValue: string, newValue: string) {

    }

    protected onActualImageScaleTypeChanged(oldValue: string, newValue: string) {

    }

    protected onFadeDurationChanged(oldValue: number, newValue: number) {

    }

    protected onBackgroundUriChanged(oldValue: string, newValue: string) {

    }

    protected onProgressiveRenderingEnabledChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onShowProgressBarChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onProgressBarColorChanged(oldValue: string, newValue: string) {

    }

    protected onRoundAsCircleChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onRoundTopLeftChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onRoundTopRightChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onRoundBottomLeftChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onRoundBottomRightChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onRoundedCornerRadiusChanged(oldValue: number, newValue: number) {

    }

    protected onAutoPlayAnimationsPChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onTapToRetryEnabledChanged(oldValue: boolean, newValue: boolean) {

    }

    protected onAspectRatioChanged(oldValue: number, newValue: number) {

    }

    protected onDecodeWidthChanged(oldValue: number, newValue: number) {

    }

    protected onDecodeHeightChanged(oldValue: number, newValue: number) {

    }


}
FrescoDrawee.imageUriProperty.register(FrescoDrawee);
FrescoDrawee.placeholderImageUriProperty.register(FrescoDrawee);
FrescoDrawee.failureImageUriProperty.register(FrescoDrawee);
FrescoDrawee.actualImageScaleTypeProperty.register(FrescoDrawee);
FrescoDrawee.fadeDurationProperty.register(FrescoDrawee);
FrescoDrawee.backgroundUriProperty.register(FrescoDrawee);
FrescoDrawee.progressiveRenderingEnabledProperty.register(FrescoDrawee);
FrescoDrawee.showProgressBarProperty.register(FrescoDrawee);
FrescoDrawee.progressBarColorProperty.register(FrescoDrawee);
FrescoDrawee.roundAsCircleProperty.register(FrescoDrawee);
FrescoDrawee.roundTopLeftProperty.register(FrescoDrawee);
FrescoDrawee.roundTopRightProperty.register(FrescoDrawee);
FrescoDrawee.roundBottomLeftProperty.register(FrescoDrawee);
FrescoDrawee.roundBottomRightProperty.register(FrescoDrawee);
FrescoDrawee.roundedCornerRadiusProperty.register(FrescoDrawee);
FrescoDrawee.autoPlayAnimationsProperty.register(FrescoDrawee);
FrescoDrawee.tapToRetryEnabledProperty.register(FrescoDrawee);
FrescoDrawee.aspectRatioProperty.register(FrescoDrawee);
FrescoDrawee.decodeWidthProperty.register(FrescoDrawee);
FrescoDrawee.decodeHeightProperty.register(FrescoDrawee);
