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

export class FrescoDrawee extends commonModule.FrescoDrawee {
    private _android: com.facebook.drawee.view.SimpleDraweeView;
    private placeholderImageDrawable;
    private failureImageDrawable;
    private backgroundDrawable;

    public _createUI() {
        this._android = new com.facebook.drawee.view.SimpleDraweeView(this._context);
        this.initDrawee();
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
        this.initPlaceholderImage();
    }

    protected onFailureImageUriChanged(args) {
        this.initFailureImage();
    }

    protected onActualImageScaleTypeChanged(args) {
        this.initActualImageScaleType();
    }

    protected onFadeDurationChanged(args) {
        this.initFadeDuration();
    }

    protected onBackgroundUriChanged(args) {
        this.initBackground();
    }

    protected onProgressiveRenderingEnabledChanged(args) {

    }

    protected onShowProgressBarChanged() {
        this.initProcessBar();
    }

    protected onProgressBarColorChanged(args) {
        this.initProcessBarColor();
    }

    protected onRoundAsCircleChanged(args) {
        this.initRoundingParamsAsCircle();
    }

    protected onRoundTopLeftChanged(args) {
        this.initRoundTopLeft();
    }

    protected onRoundTopRightChanged(args) {
        this.initRoundTopRight();
    }

    protected onRoundBottomLeftrChanged(args) {
        this.initRoundBottomLeft();
    }

    protected onRoundBottomRightChanged(args) {
        this.initRoundBottomRight();
    }

    protected onRoundedCornerRadiusChanged(args) {
        this.initRoundedCornerRadius();
    }

    private initDrawee() {
        this.initImage();
        this.initFailureImage();
        this.initPlaceholderImage();
        this.initActualImageScaleType();
        this.initFadeDuration();
        this.initBackground();
        this.initProcessBar();
        this.initRoundingParamsAsCircle()
        this.initRoundTopLeft();
        this.initRoundTopRight();
        this.initRoundBottomLeft();
        this.initRoundBottomRight();
        this.initRoundedCornerRadius();
    }

    private initActualImageScaleType() {
        if (this._android) {
            if (this.actualImageScaleType) {
                this.updateHierarchy();
            }
        }
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
                        var args: commonModule.FrescoEventData = <commonModule.FrescoEventData>{
                            eventName: commonModule.FrescoDrawee.finalImageSetEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                    onFailure: function (id, throwable) {
                        var args: commonModule.FrescoEventData = <commonModule.FrescoEventData>{
                            eventName: commonModule.FrescoDrawee.failureEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                    onIntermediateImageFailed: function (id, throwable) {
                        var args: commonModule.FrescoEventData = <commonModule.FrescoEventData>{
                            eventName: commonModule.FrescoDrawee.intermediateImageFailedEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                    onIntermediateImageSet: function (id, imageInfo) {
                        var args: commonModule.FrescoEventData = <commonModule.FrescoEventData>{
                            eventName: commonModule.FrescoDrawee.intermediateImageSetEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                    onRelease: function (id) {
                        var args: commonModule.FrescoEventData = <commonModule.FrescoEventData>{
                            eventName: commonModule.FrescoDrawee.releaseEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                    onSubmit: function (id, callerContext) {
                        var args: commonModule.FrescoEventData = <commonModule.FrescoEventData>{
                            eventName: commonModule.FrescoDrawee.submitEvent,
                            object: that.get()
                        };

                        that.get().notify(args);
                    },
                });
                var controller = com.facebook.drawee.backends.pipeline.Fresco.newDraweeControllerBuilder()
                    .setImageRequest(request)
                    .setControllerListener(listener)
                    .setOldController(this._android.getController())
                    .build();

                this._android.setController(controller);
            }
        }
    }

    private initPlaceholderImage() {
        if (this._android) {
            if (this.placeholderImageUri) {
                this.placeholderImageDrawable = this.getDrawable(this.placeholderImageUri);
                this.updateHierarchy();
            }
        }
    }

    private initFailureImage() {
        if (this._android) {
            if (this.failureImageUri) {
                this.failureImageDrawable = this.getDrawable(this.failureImageUri);
                this.updateHierarchy();
            }
        }
    }

    private initFadeDuration() {
        if (this._android) {
            if (this.fadeDuration) {
                this.updateHierarchy();
            }
        }
    }

    private initBackground() {
        if (this._android) {
            if (this.backgroundUri) {
                this.backgroundDrawable = this.getDrawable(this.backgroundUri);
                this.updateHierarchy();
            }
        }
    }

    private initProcessBar() {
        if (this._android) {
            if (this.showProgressBar) {
                this.updateHierarchy();
            }
        }
    }

    private initProcessBarColor() {
        if (this._android) {
            if (this.progressBarColor) {
                this.updateHierarchy();
            }
        }
    }

    private initRoundingParamsAsCircle() {
        if (this._android) {
            if (this.roundAsCircle) {
                this.updateHierarchy();
            }
        }
    }

    private initRoundTopLeft() {
        if (this._android) {
            if (this.roundTopLeft) {
                this.updateHierarchy();
            }
        }
    }

    private initRoundTopRight() {
        if (this._android) {
            if (this.roundTopRight) {
                this.updateHierarchy();
            }
        }
    }

    private initRoundBottomLeft() {
        if (this._android) {
            if (this.roundBottomLeft) {
                this.updateHierarchy();
            }
        }
    }

    private initRoundBottomRight() {
        if (this._android) {
            if (this.roundBottomRight) {
                this.updateHierarchy();
            }
        }
    }

    private initRoundedCornerRadius() {
        if (this._android) {
            if (this.roundedCornerRadius) {
                this.updateHierarchy();
            }
        }
    }

    private updateHierarchy() {
        var builder: GenericDraweeHierarchyBuilder = new GenericDraweeHierarchyBuilder();
        if (this.failureImageUri && this.failureImageDrawable) {
            builder.setFailureImage(this.failureImageDrawable);
        }

        if (this.placeholderImageUri && this.placeholderImageDrawable) {
            builder.setPlaceholderImage(this.placeholderImageDrawable);
        }

        if (this.actualImageScaleType) {
            builder.setActualImageScaleType(this.actualImageScaleType);
        }

        if (this.fadeDuration) {
            builder.setFadeDuration(this.fadeDuration);
        }

        if (this.backgroundUri && this.backgroundDrawable) {
            builder.setBackground(this.backgroundDrawable);
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

        var hiearchy = builder.build();
        this._android.setHierarchy(hiearchy);
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

    public setCornersRadii(topLeft: number, topRight, bottomRight: number, bottomLeft: number): GenericDraweeHierarchyBuilder {
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