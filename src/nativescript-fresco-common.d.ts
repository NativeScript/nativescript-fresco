import { View, Property } from "tns-core-modules/ui/core/view";
import * as observableModule from "tns-core-modules/data/observable";
export declare namespace ScaleType {
    const Center = "center";
    const CenterCrop = "centerCrop";
    const CenterInside = "centerInside";
    const FitCenter = "fitCenter";
    const FitEnd = "fitEnd";
    const FitStart = "fitStart";
    const FitXY = "fitXY";
    const FocusCrop = "focusCrop";
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
export declare class EventData implements observableModule.EventData {
    private _eventName;
    private _object;
    eventName: string;
    object: any;
}
export declare class FrescoDrawee extends View {
    static finalImageSetEvent: string;
    static failureEvent: string;
    static intermediateImageFailedEvent: string;
    static intermediateImageSetEvent: string;
    static releaseEvent: string;
    static submitEvent: string;
    imageUri: string;
    placeholderImageUri: string;
    failureImageUri: string;
    actualImageScaleType: string;
    fadeDuration: number;
    backgroundUri: string;
    progressiveRenderingEnabled: boolean;
    showProgressBar: boolean;
    progressBarColor: string;
    roundAsCircle: boolean;
    roundBottomRight: boolean;
    roundTopLeft: boolean;
    roundTopRight: boolean;
    roundBottomLeft: boolean;
    roundedCornerRadius: number;
    autoPlayAnimations: boolean;
    tapToRetryEnabled: boolean;
    aspectRatio: number;
    decodeWidth: number;
    decodeHeight: number;
    static imageUriProperty: Property<FrescoDrawee, string>;
    static placeholderImageUriProperty: Property<FrescoDrawee, string>;
    static failureImageUriProperty: Property<FrescoDrawee, string>;
    static actualImageScaleTypeProperty: Property<FrescoDrawee, string>;
    static fadeDurationProperty: Property<FrescoDrawee, number>;
    static backgroundUriProperty: Property<FrescoDrawee, string>;
    static progressiveRenderingEnabledProperty: Property<FrescoDrawee, boolean>;
    static showProgressBarProperty: Property<FrescoDrawee, boolean>;
    static progressBarColorProperty: Property<FrescoDrawee, string>;
    static roundAsCircleProperty: Property<FrescoDrawee, boolean>;
    static roundTopLeftProperty: Property<FrescoDrawee, boolean>;
    static roundTopRightProperty: Property<FrescoDrawee, boolean>;
    static roundBottomLeftProperty: Property<FrescoDrawee, boolean>;
    static roundBottomRightProperty: Property<FrescoDrawee, boolean>;
    static roundedCornerRadiusProperty: Property<FrescoDrawee, number>;
    static autoPlayAnimationsProperty: Property<FrescoDrawee, boolean>;
    static tapToRetryEnabledProperty: Property<FrescoDrawee, boolean>;
    static aspectRatioProperty: Property<FrescoDrawee, number>;
    static decodeWidthProperty: Property<FrescoDrawee, number>;
    static decodeHeightProperty: Property<FrescoDrawee, number>;
    private onImageUriPropertyChanged(oldValue, newValue);
    private onPlaceholderImageUriPropertyChanged(oldValue, newValue);
    private onFailureImageUriPropertyChanged(oldValue, newValue);
    private onActualImageScaleTypePropertyChanged(oldValue, newValue);
    private onFadeDurationPropertyChanged(oldValue, newValue);
    private onBackgroundUriPropertyChanged(oldValue, newValue);
    private onProgressiveRenderingEnabledPropertyChanged(oldValue, newValue);
    private onShowProgressBarPropertyChanged(oldValue, newValue);
    private onProgressBarColorPropertyChanged(oldValue, newValue);
    private onRoundAsCirclePropertyChanged(oldValue, newValue);
    private onRoundTopLeftPropertyChanged(oldValue, newValue);
    private onRoundTopRightPropertyChanged(oldValue, newValue);
    private onRoundBottomLeftPropertyChanged(oldValue, newValue);
    private onRoundBottomRightPropertyChanged(oldValue, newValue);
    private onRoundedCornerRadiusPropertyChanged(oldValue, newValue);
    private onAutoPlayAnimationsPropertyChanged(oldValue, newValue);
    private onTapToRetryEnabledPropertyChanged(oldValue, newValue);
    private onAspectRatioPropertyChanged(oldValue, newValue);
    private onDecodeWidthPropertyChanged(oldValue, newValue);
    private onDecodeHeightPropertyChanged(oldValue, newValue);
    protected onImageUriChanged(oldValue: string, newValue: string): void;
    protected onPlaceholderImageUriChanged(oldValue: string, newValue: string): void;
    protected onFailureImageUriChanged(oldValue: string, newValue: string): void;
    protected onActualImageScaleTypeChanged(oldValue: string, newValue: string): void;
    protected onFadeDurationChanged(oldValue: number, newValue: number): void;
    protected onBackgroundUriChanged(oldValue: string, newValue: string): void;
    protected onProgressiveRenderingEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected onShowProgressBarChanged(oldValue: boolean, newValue: boolean): void;
    protected onProgressBarColorChanged(oldValue: string, newValue: string): void;
    protected onRoundAsCircleChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundTopLeftChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundTopRightChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundBottomLeftChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundBottomRightChanged(oldValue: boolean, newValue: boolean): void;
    protected onRoundedCornerRadiusChanged(oldValue: number, newValue: number): void;
    protected onAutoPlayAnimationsPChanged(oldValue: boolean, newValue: boolean): void;
    protected onTapToRetryEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected onAspectRatioChanged(oldValue: number, newValue: number): void;
    protected onDecodeWidthChanged(oldValue: number, newValue: number): void;
    protected onDecodeHeightChanged(oldValue: number, newValue: number): void;
}
