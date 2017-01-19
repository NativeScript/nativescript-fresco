import * as commonModule from "./nativescript-fresco-common";
export declare function initialize(): void;
export declare function getImagePipeline(): ImagePipeline;
export declare class ImagePipeline {
    private _android;
    private isInDiskCacheSync(uri);
    isInBitmapMemoryCache(uri: string): boolean;
    evictFromMemoryCache(uri: string): void;
    evictFromDiskCache(uri: string): void;
    evictFromCache(uri: string): void;
    clearCaches(): void;
    clearMemoryCaches(): void;
    clearDiskCaches(): void;
    android: any;
}
export declare class AnimatedImage extends com.facebook.imagepipeline.animated.base.AnimatedDrawable implements commonModule.IAnimatedImage {
    start(): void;
    stop(): void;
    isRunning(): boolean;
}
export declare class FrescoError implements commonModule.IError {
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
export declare class ImageInfo implements commonModule.IImageInfo {
    private _nativeImageInfo;
    constructor(imageInfo: any);
    getHeight(): number;
    getWidth(): number;
    getQualityInfo(): QualityInfo;
}
export declare class FinalEventData extends commonModule.EventData {
    private _imageInfo;
    private _animatable;
    imageInfo: ImageInfo;
    animatable: commonModule.IAnimatedImage;
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
    _createUI(): void;
    _clearAndroidReference(): void;
    updateImageUri(): void;
    readonly android: com.facebook.drawee.view.SimpleDraweeView;
    protected onImageUriChanged(args: any): void;
    protected onPlaceholderImageUriChanged(args: any): void;
    protected onFailureImageUriChanged(args: any): void;
    protected onActualImageScaleTypeChanged(args: any): void;
    protected onFadeDurationChanged(args: any): void;
    protected onBackgroundUriChanged(args: any): void;
    protected onProgressiveRenderingEnabledChanged(args: any): void;
    protected onShowProgressBarChanged(): void;
    protected onProgressBarColorChanged(args: any): void;
    protected onRoundAsCircleChanged(args: any): void;
    protected onRoundTopLeftChanged(args: any): void;
    protected onRoundTopRightChanged(args: any): void;
    protected onRoundBottomLeftChanged(args: any): void;
    protected onRoundBottomRightChanged(args: any): void;
    protected onRoundedCornerRadiusChanged(args: any): void;
    protected onAutoPlayAnimationsPropertyChanged(args: any): void;
    protected onTapToRetryEnabledChanged(args: any): void;
    protected onAspectRatioChanged(args: any): void;
    private initDrawee();
    private initImage();
    private updateHierarchy();
    private getDrawable(path);
    private getDrawableFromLocalFile(localFilePath);
    private getDrawableFromResource(resourceName);
}
