declare namespace android {
    namespace net {
        class Uri {
            static parse(orientation);
        }

        namespace Uri {
            class Builder {
                scheme(scheme: string);
                path(path: string);
            }
        }
    }

    namespace graphics {
        namespace drawable {
            class BitmapDrawable {
                constructor(resources, image);
            }
        }
        class Color {
            static parseColor(color: string);
        }
    }
}

declare namespace com {
    namespace facebook {
        namespace drawee {
            namespace drawable {
                class ProgressBarDrawable<T> {
                    constructor();
                    setColor(color: any);
                }

                namespace ScalingUtils {
                    class ScaleType {
                        static CENTER;
                        static CENTER_CROP;
                        static CENTER_INSIDE;
                        static FIT_CENTER;
                        static FIT_END;
                        static FIT_START;
                        static FIT_XY;
                        static FOCUS_CROP;
                    }
                }
            }

            namespace backends {
                namespace pipeline {
                    class Fresco {
                        static initialize(context);

                        static newDraweeControllerBuilder(): PipelineDraweeControllerBuilder;

                        static getImagePipeline(): com.facebook.imagepipeline.core.ImagePipeline;
                    }
                }

                class PipelineDraweeController {

                }

                class PipelineDraweeControllerBuilder {
                    setAutoPlayAnimations(value: boolean): PipelineDraweeControllerBuilder;
                    setImageRequest(uri): PipelineDraweeControllerBuilder;
                    setControllerListener(controller: com.facebook.drawee.controller.ControllerListener<com.facebook.imagepipeline.image.ImageInfo>): PipelineDraweeControllerBuilder;
                    setTapToRetryEnabled(value: boolean): PipelineDraweeControllerBuilder;
                    setOldController(controller): PipelineDraweeControllerBuilder;
                    build(): PipelineDraweeController;
                }
            }

            namespace view {
                class SimpleDraweeView {
                    constructor(context);
                    setImageURI(context, hierarchy);
                    setImageURI(context);
                    getController();
                    setController(controller);
                    setHierarchy(hierarchy);
                    setAspectRatio(ratio: number);
                }
            }

            namespace controller {
                class ControllerListener<T> {
                    constructor(context);
                }
            }

            namespace generic {
                class GenericDraweeHierarchyBuilder {
                    constructor(context);
                    setPlaceholderImage(drawable);
                    setFailureImage(drawable);
                    setActualImageScaleType(sclaleType);
                    build();
                    setFadeDuration(duration: number);
                    setBackground(drawable);
                    setProgressBarImage(drawable);
                    setRoundingParams(params: RoundingParams);
                    shutDown();
                }

                class GenericDraweeHierarchy {

                }

                class RoundingParams {
                    static asCircle(): void;
                    setCornersRadii(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number);
                }
            }
        }

        namespace common {
            namespace util {
                class UriUtil {
                    static LOCAL_RESOURCE_SCHEME;
                }
            }
        }

        namespace imagepipeline {
            namespace request {
                class ImageRequestBuilder {
                    static newBuilderWithSource(url);
                }
            }

            namespace image {
                class ImageInfo {
                    getHeight(): number;
                    getWidth(): number;
                    getQualityInfo(): QualityInfo;
                }

                class QualityInfo {
                    getQuality(): number;
                    isOfFullQuality(): boolean;
                    isOfGoodEnoughQuality(): boolean;
                }

                class ImmutableQualityInfo {
                    getQuality(): number;
                    isOfFullQuality(): boolean;
                    isOfGoodEnoughQuality(): boolean;
                }
            }

            namespace animated {
                namespace base {
                    class AnimatedDrawable {
                        start(): void;
                        stop(): void;
                        isRunning(): boolean;
                    }
                }
            }

            namespace core {
                class ImagePipeline {
                    isInBitmapMemoryCache(uri: string): boolean;
                    isInDiskCacheSync(uri: string): boolean;
                    evictFromMemoryCache(uri: string): void;
                    evictFromDiskCache(uri: string): void;
                    evictFromCache(uri: string): void;
                    clearCaches(): void;
                    clearMemoryCaches(): void;
                    clearDiskCaches(): void;
                }
            }
        }
    }
}

declare namespace java {
    namespace lang {
        class String {
            static valueOf(identifier);
        }

        class Class {
            getName(): string;
        }

        class Throwable {
            getClass(): java.lang.Class;
            getMessage(): string;
        }
    }
}