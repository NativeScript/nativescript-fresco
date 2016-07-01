import commonModule = require("./nativescript-fresco-common");
import utils = require("utils/utils");
import types = require("utils/types");
import application = require("application");
import imageSource = require("image-source");

global.moduleMerge(commonModule, exports);

export function initialize(): void {
    if (application.android) {
        com.facebook.drawee.backends.pipeline.Fresco.initialize(application.android.context);
    }
};

export class AnimatedImage extends com.facebook.imagepipeline.animated.base.AnimatedDrawable implements commonModule.IAnimatedImage {
    start(): void {
        super.start();
    }

    stop(): void {
        super.stop();
    }

    isRunning(): boolean {
        return super.isRunning();
    }
}

export class FrescoError implements commonModule.IError {
    private _stringValue;
    private _message;
    private _errorType;

    constructor(throwable: java.lang.Throwable) {
        this._message = throwable.getMessage();
        this._errorType = throwable.getClass().getName();
        this._stringValue = throwable.toString();
    }

    getMessage(): string {
        return this._message;
    }

    getErrorType(): string {
        return this._errorType;
    }

    toString(): string {
        return this._stringValue;
    }
}

export interface QualityInfo {
    getQuality();

    isOfFullQuality();

    isOfGoodEnoughQuality();
}

export class ImageInfo implements commonModule.IImageInfo {
    private _nativeImageInfo: com.facebook.imagepipeline.image.ImageInfo;

    constructor(imageInfo) {
        this._nativeImageInfo = imageInfo;
    }

    getHeight(): number {
        return this._nativeImageInfo.getHeight();
    }

    getWidth(): number {
        return this._nativeImageInfo.getWidth();

    }

    getQualityInfo(): QualityInfo {
        return this._nativeImageInfo.getQualityInfo();
    }
}

export class FinalEventData extends commonModule.EventData {
    private _imageInfo: ImageInfo;
    private _animatable: commonModule.IAnimatedImage;

    get imageInfo(): ImageInfo {
        return this._imageInfo;
    }

    set imageInfo(value: ImageInfo) {
        this._imageInfo = value;
    }

    get animatable(): commonModule.IAnimatedImage {
        return this._animatable;
    }

    set animatable(value: commonModule.IAnimatedImage) {
        this._animatable = value;
    }
}

export class IntermediateEventData extends commonModule.EventData {
    private _imageInfo: ImageInfo;

    get imageInfo(): ImageInfo {
        return this._imageInfo;
    }

    set imageInfo(value: ImageInfo) {
        this._imageInfo = value;
    }
}

export class FailureEventData extends commonModule.EventData {
    private _error: FrescoError;

    get error(): FrescoError {
        return this._error;
    }

    set error(value: FrescoError) {
        this._error = value;
    }
}

export class FrescoDrawee extends commonModule.FrescoDrawee {
    private _android: com.facebook.drawee.view.SimpleDraweeView;

    public _createUI() {
        this._android = new com.facebook.drawee.view.SimpleDraweeView(this._context);
        this.initDrawee();
        this.updateHierarchy();
    }

    public _clearAndroidReference() {
        this._android.setImageURI(null, null);
        this._android = undefined;
        super._clearAndroidReference();
    }

    get android() {
        return this._android;
    }

    protected onImageUriChanged(args) {
        this.initImage();
    }

    protected onPlaceholderImageUriChanged(args) {
        this.updateHierarchy();
    }

    protected onFailureImageUriChanged(args) {
        this.updateHierarchy();
    }

    protected onActualImageScaleTypeChanged(args) {
        this.updateHierarchy();
    }

    protected onFadeDurationChanged(args) {
        this.updateHierarchy();
    }

    protected onBackgroundUriChanged(args) {
        this.updateHierarchy();
    }

    protected onProgressiveRenderingEnabledChanged(args) {

    }

    protected onShowProgressBarChanged() {
        this.updateHierarchy();
    }

    protected onProgressBarColorChanged(args) {
        this.updateHierarchy();
    }

    protected onRoundAsCircleChanged(args) {
        this.updateHierarchy();
    }

    protected onRoundTopLeftChanged(args) {
        this.updateHierarchy();
    }

    protected onRoundTopRightChanged(args) {
        this.updateHierarchy();
    }

    protected onRoundBottomLeftChanged(args) {
        this.updateHierarchy();
    }

    protected onRoundBottomRightChanged(args) {
        this.updateHierarchy();
    }

    protected onRoundedCornerRadiusChanged(args) {
        this.updateHierarchy();
    }

    protected onAutoPlayAnimationsPropertyChanged(args) {

    }

    protected onTapToRetryEnabledChanged(args) {

    }

    protected onAspectRatioChanged(args) {

    }

    private initDrawee() {
        this.initImage();
    }

    private initImage() {
        if (this._android) {
            this._android.setImageURI(null);
            if (this.imageUri) {
                var image = this.getDrawable(this.imageUri);
                var uri;
                if (!image) {
                    uri = android.net.Uri.parse(this.imageUri);
                } else {
                    if (utils.isFileOrResourcePath(this.imageUri)) {
                        var res = utils.ad.getApplicationContext().getResources();
                        if (!res) {
                            return;
                        }

                        var uri;
                        if (this.imageUri.indexOf(utils.RESOURCE_PREFIX) === 0) {
                            var resName = this.imageUri.substr(utils.RESOURCE_PREFIX.length);
                            var identifier = res.getIdentifier(resName, 'drawable', utils.ad.getApplication().getPackageName());
                            if (0 < identifier) {
                                uri = new android.net.Uri.Builder()
                                    .scheme(com.facebook.common.util.UriUtil.LOCAL_RESOURCE_SCHEME)
                                    .path(java.lang.String.valueOf(identifier))
                                    .build();
                            }
                        } else {
                            // TODO: load from local file
                            uri = android.net.Uri.parse("");
                        }
                    }
                }

                var progressiveRenderingEnabledValue = this.progressiveRenderingEnabled != undefined ? this.progressiveRenderingEnabled : false;
                var request = com.facebook.imagepipeline.request.ImageRequestBuilder.newBuilderWithSource(uri)
                    .setProgressiveRenderingEnabled(progressiveRenderingEnabledValue)
                    .build();

                var that: WeakRef<FrescoDrawee> = new WeakRef(this);
                var listener = new com.facebook.drawee.controller.ControllerListener<com.facebook.imagepipeline.image.ImageInfo>({
                    onFinalImageSet: function (id, imageInfo, animatable) {
                        var info = new ImageInfo(imageInfo);
                        var args: FinalEventData = <FinalEventData>{
                            eventName: commonModule.FrescoDrawee.finalImageSetEvent,
                            object: that.get(),
                            imageInfo: info,
                            animatable: animatable,
                        };

                        that.get().notify(args);
                    },
                    onFailure: function (id, throwable) {
                        var frescoError = new FrescoError(throwable);
                        var args: FailureEventData = <FailureEventData>{
                            eventName: commonModule.FrescoDrawee.failureEvent,
                            object: that.get(),
                            error: frescoError
                        };

                        that.get().notify(args);
                    },
                    onIntermediateImageFailed: function (id, throwable) {
                        var frescoError = new FrescoError(throwable);
                        var args: FailureEventData = <FailureEventData>{
                            eventName: commonModule.FrescoDrawee.intermediateImageFailedEvent,
                            object: that.get(),
                            error: frescoError
                        };

                        that.get().notify(args);
                    },
                    onIntermediateImageSet: function (id, imageInfo) {
                        var info = new ImageInfo(imageInfo);
                        var args: IntermediateEventData = <IntermediateEventData>{
                            eventName: commonModule.FrescoDrawee.intermediateImageSetEvent,
                            object: that.get(),
                            imageInfo: info
                        };

                        that.get().notify(args);
                    },
                    onRelease: function (id) {
                        var args: commonModule.EventData = <commonModule.EventData>{
                            eventName: commonModule.FrescoDrawee.releaseEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                    onSubmit: function (id, callerContext) {
                        var args: commonModule.EventData = <commonModule.EventData>{
                            eventName: commonModule.FrescoDrawee.submitEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                });
                var builder = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder();
                builder.setImageRequest(request);
                builder.setControllerListener(listener);
                builder.setOldController(this._android.getController());
                if (this.autoPlayAnimations) {
                    builder.setAutoPlayAnimations(this.autoPlayAnimations);
                }

                if (this.tapToRetryEnabled) {
                    builder.setTapToRetryEnabled(this.tapToRetryEnabled)
                }

                var controller = builder.build();
                if (this.aspectRatio) {
                    this._android.setAspectRatio(this.aspectRatio);
                }

                this._android.setController(controller);
            }
        }
    }

    private updateHierarchy() {
        if (this._android) {
            var failureImageDrawable;
            var placeholderImageDrawable;
            var backgroundDrawable;
            if (this.failureImageUri) {
                failureImageDrawable = this.getDrawable(this.failureImageUri);
            }

            if (this.placeholderImageUri) {
                placeholderImageDrawable = this.getDrawable(this.placeholderImageUri);
            }

            if (this.backgroundUri) {
                backgroundDrawable = this.getDrawable(this.backgroundUri);
            }

            var builder: GenericDraweeHierarchyBuilder = new GenericDraweeHierarchyBuilder();
            if (this.failureImageUri && failureImageDrawable) {
                builder.setFailureImage(failureImageDrawable);
            }

            if (this.placeholderImageUri && placeholderImageDrawable) {
                builder.setPlaceholderImage(placeholderImageDrawable);
            }

            if (this.actualImageScaleType) {
                builder.setActualImageScaleType(this.actualImageScaleType);
            }

            if (this.fadeDuration) {
                builder.setFadeDuration(this.fadeDuration);
            }

            if (this.backgroundUri && backgroundDrawable) {
                builder.setBackground(backgroundDrawable);
            }

            if (this.showProgressBar) {
                builder.setProgressBarImage(this.progressBarColor);
            }

            if (this.roundAsCircle) {
                builder.setRoundingParamsAsCircle();
            }

            if (this.roundBottomLeft || this.roundBottomRight || this.roundTopLeft || this.roundTopRight) {
                var topLeftRadius = this.roundTopLeft ? this.roundedCornerRadius : 0;
                var topRightRadius = this.roundTopRight ? this.roundedCornerRadius : 0;
                var bottomRightRadius = this.roundBottomRight ? this.roundedCornerRadius : 0;
                var bottomLeftRadius = this.roundBottomLeft ? this.roundedCornerRadius : 0;
                builder.setCornersRadii(topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius);
            }

            var hierarchy = builder.build();
            this._android.setHierarchy(hierarchy);
        }
    }

    private getDrawable(path: string) {
        var drawable;
        var builder: GenericDraweeHierarchyBuilder = new GenericDraweeHierarchyBuilder();
        if (utils.isFileOrResourcePath(path)) {
            if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
                drawable = this.getDrawableFromResource(path);
            } else {
                drawable = this.getDrawableFromLocalFile(path);
            }
        }

        return drawable;
    }

    private getDrawableFromLocalFile(localFilePath: string) {
        var img = imageSource.fromFile(localFilePath);
        var drawable = new android.graphics.drawable.BitmapDrawable(utils.ad.getApplicationContext().getResources(), img.android);

        return drawable;
    }

    private getDrawableFromResource(resourceName: string) {
        var img = imageSource.fromResource(resourceName.substr(utils.RESOURCE_PREFIX.length));
        var drawable = new android.graphics.drawable.BitmapDrawable(utils.ad.getApplicationContext().getResources(), img.android);

        return drawable;
    }
}

class GenericDraweeHierarchyBuilder {
    private nativeBuilder: com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;

    constructor() {
        var res = application.android.context.getResources();
        this.nativeBuilder = new com.facebook.drawee.generic.GenericDraweeHierarchyBuilder(res);
    }

    public setPlaceholderImage(drawable): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        this.nativeBuilder.setPlaceholderImage(drawable);

        return this;
    }

    public setFailureImage(drawable): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        this.nativeBuilder.setFailureImage(drawable);

        return this;
    }

    public setActualImageScaleType(scaleType: string): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        this.nativeBuilder.setActualImageScaleType(getScaleType(scaleType));

        return this;
    }

    public build(): com.facebook.drawee.generic.GenericDraweeHierarchy {
        if (!application.android) {
            return;
        }

        return this.nativeBuilder.build();
    }

    public setFadeDuration(duration: number): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        this.nativeBuilder.setFadeDuration(duration);

        return this;
    }

    public setBackground(drawable): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        this.nativeBuilder.setBackground(drawable);

        return this;
    }

    public setProgressBarImage(color: string): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        var drawable = new com.facebook.drawee.drawable.ProgressBarDrawable();
        if (color) {
            drawable.setColor(android.graphics.Color.parseColor(color));
        }

        this.nativeBuilder.setProgressBarImage(drawable);

        return this;
    }

    public setRoundingParamsAsCircle(): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        var params = new com.facebook.drawee.generic.RoundingParams.asCircle();
        this.nativeBuilder.setRoundingParams(params)

        return this;
    }

    public setCornersRadii(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): GenericDraweeHierarchyBuilder {
        if (!application.android) {
            return;
        }

        var params = new com.facebook.drawee.generic.RoundingParams();
        params.setCornersRadii(topLeft, topRight, bottomRight, bottomLeft);
        this.nativeBuilder.setRoundingParams(params)

        return this;
    }

    public shutDown(): void {
        this.nativeBuilder.shutDown();
    }
}

function getScaleType(scaleType: string) {
    if (types.isString(scaleType)) {
        switch (scaleType) {
            case commonModule.ScaleType.Center:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER;
            case commonModule.ScaleType.CenterCrop:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER_CROP;
            case commonModule.ScaleType.CenterInside:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.CENTER_INSIDE;
            case commonModule.ScaleType.FitCenter:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_CENTER;
            case commonModule.ScaleType.FitEnd:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_END;
            case commonModule.ScaleType.FitStart:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_START;
            case commonModule.ScaleType.FitXY:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FIT_XY;
            case commonModule.ScaleType.FocusCrop:
                return com.facebook.drawee.drawable.ScalingUtils.ScaleType.FOCUS_CROP;
            default:
                break;
        }
    }
}