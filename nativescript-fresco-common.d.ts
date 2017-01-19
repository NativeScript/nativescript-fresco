/// <reference path="references.d.ts" />
import * as viewModule from "ui/core/view";
import * as observableModule from "data/observable";
export declare module ScaleType {
    var Center: string;
    var CenterCrop: string;
    var CenterInside: string;
    var FitCenter: string;
    var FitEnd: string;
    var FitStart: string;
    var FitXY: string;
    var FocusCrop: string;
}
export interface IAnimatedImage {
    start(): void;
    stop(): void;
    isRunning(): boolean;
}
export interface IImageInfo {
    getHeight(): number;
    getWidth(): number;
}
export interface IError {
    getMessage(): string;
    getErrorType(): string;
    toString(): string;
}
export declare class EventData implements observableModule.EventData {
    private _eventName;
    private _object;
    eventName: string;
    object: any;
}
export declare class FrescoDrawee extends viewModule.View {
    static finalImageSetEvent: string;
    static failureEvent: string;
    static intermediateImageFailedEvent: string;
    static intermediateImageSetEvent: string;
    static releaseEvent: string;
    static submitEvent: string;
    private static imageUriProperty;
    private static placeholderImageUriProperty;
    private static failureImageUriProperty;
    private static actualImageScaleTypeProperty;
    private static fadeDurationProperty;
    private static backgroundUriProperty;
    private static progressiveRenderingEnabledProperty;
    private static showProgressBarProperty;
    private static progressBarColorProperty;
    private static roundAsCircleProperty;
    private static roundTopLeftProperty;
    private static roundTopRightProperty;
    private static roundBottomLeftroperty;
    private static roundBottomRightProperty;
    private static roundedCornerRadiusProperty;
    private static autoPlayAnimationsProperty;
    private static tapToRetryEnabledProperty;
    private static aspectRatioProperty;
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
    private static onImageUriPropertyChanged(args);
    private static onPlaceholderImageUriPropertyChanged(args);
    private static onFailureImageUriPropertyChanged(args);
    private static onActualImageScaleTypePropertyChanged(args);
    private static onFadeDurationPropertyChanged(args);
    private static onBackgroundUriPropertyChanged(args);
    private static onProgressiveRenderingEnabledPropertyChanged(args);
    private static onShowProgressBarPropertyChanged(args);
    private static onProgressBarColorPropertyChanged(args);
    private static onRoundAsCirclePropertyChanged(args);
    private static onRoundTopLeftPropertyChanged(args);
    private static onRoundTopRightPropertyChanged(args);
    private static onRoundBottomLeftPropertyChanged(args);
    private static onRoundBottomRightPropertyChanged(args);
    private static onRoundedCornerRadiusPropertyChanged(args);
    private static onAutoPlayAnimationsPropertyChanged(args);
    private static onTapToRetryEnabledPropertyChanged(args);
    private static onAspectRatioPropertyChanged(args);
    protected onImageUriChanged(args: any): void;
    protected onPlaceholderImageUriChanged(args: any): void;
    protected onFailureImageUriChanged(args: any): void;
    protected onActualImageScaleTypeChanged(args: any): void;
    protected onFadeDurationChanged(args: any): void;
    protected onBackgroundUriChanged(args: any): void;
    protected onProgressiveRenderingEnabledChanged(args: any): void;
    protected onShowProgressBarChanged(args: any): void;
    protected onProgressBarColorChanged(args: any): void;
    protected onRoundAsCircleChanged(args: any): void;
    protected onRoundTopLeftChanged(args: any): void;
    protected onRoundTopRightChanged(args: any): void;
    protected onRoundBottomLeftChanged(args: any): void;
    protected onRoundBottomRightChanged(args: any): void;
    protected onRoundedCornerRadiusChanged(args: any): void;
    protected onAutoPlayAnimationsPChanged(args: any): void;
    protected onTapToRetryEnabledChanged(args: any): void;
    protected onAspectRatioChanged(args: any): void;
}
