export * from "./nativescript-fresco-common";
import * as commonModule from "./nativescript-fresco-common";
export declare function initialize(config?: commonModule.ImagePipelineConfigSetting): void;
export declare function getImagePipeline(): ImagePipeline;
export declare function shutDown(): void;
export declare class ImagePipeline {
    private _android;
    private isInDiskCacheSync;
    isInBitmapMemoryCache(uri: string): boolean;
    evictFromMemoryCache(uri: string): void;
    evictFromDiskCache(uri: string): void;
    evictFromCache(uri: string): void;
    clearCaches(): void;
    clearMemoryCaches(): void;
    clearDiskCaches(): void;
    android: any;
}
export declare class FrescoError implements commonModule.FrescoError {
    private _stringValue;
    private _message;
    private _errorType;
    constructor(throwable: java.lang.Throwable);
    getMessage(): string;
    getErrorType(): string;
    toString(): string;
}
export interface QualityInfo {
    getQuality(): any;
    isOfFullQuality(): any;
    isOfGoodEnoughQuality(): any;
}
export declare class ImageInfo implements commonModule.ImageInfo {
    private _nativeImageInfo;
    constructor(imageInfo: com.facebook.imagepipeline.image.ImageInfo);
    getHeight(): number;
    getWidth(): number;
    getQualityInfo(): QualityInfo;
}
export declare class FinalEventData extends commonModule.EventData {
    private _imageInfo;
    private _animatable;
    imageInfo: ImageInfo;
    animatable: commonModule.AnimatedImage;
}
export declare class IntermediateEventData extends commonModule.EventData {
    private _imageInfo;
    imageInfo: ImageInfo;
}
export declare class FailureEventData extends commonModule.EventData {
    private _error;
    error: FrescoError;
}
export declare class FrescoDrawee extends commonModule.FrescoDrawee {
    private _android;
    createNativeView(): com.facebook.drawee.view.SimpleDraweeView;
    initNativeView(): void;
    disposeNativeView(): void;
    updateImageUri(): void;
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
    protected onBlurRadiusChanged(oldValue: number, newValue: number): void;
    protected onBlurDownSamplingChanged(oldValue: number, newValue: number): void;
    protected onAutoPlayAnimationsPChanged(oldValue: boolean, newValue: boolean): void;
    protected onTapToRetryEnabledChanged(oldValue: boolean, newValue: boolean): void;
    protected onAspectRatioChanged(oldValue: number, newValue: number): void;
    private initDrawee;
    private initImage;
    private updateHierarchy;
    private getDrawable;
    private getDrawableFromLocalFile;
    private getDrawableFromResource;
}
