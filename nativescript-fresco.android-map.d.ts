declare module android {
    module net {
        class Uri {
            static parse(orientation);
        }

        module Uri {
            class Builder {
                scheme(scheme: string);
                path(path: string);
            }
        }
    }

    module graphics {
        module drawable {
            class BitmapDrawable {
                constructor(resources, image);
            }
        }
        class Color {
            static parseColor(color: string);
        }
    }
}

declare module com {
    module facebook {
        module drawee {
            module drawable {
                class ProgressBarDrawable<T> {
                    constructor();
                    setColor(color: any);
                }

                module ScalingUtils {
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

            module backends {
                module pipeline {
                    class Fresco {
                        static initialize(context);

                        static newDraweeControllerBuilder();
                    }
                }
            }

            module view {
                class SimpleDraweeView {
                    constructor(context);
                    setImageURI(context, hierarchy);
                    setImageURI(context);
                    getController();
                    setController(controller);
                    setHierarchy(hierarchy);
                }
            }

            module controller {
                class ControllerListener<T> {
                    constructor(context);
                }
            }

            module generic {
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
                    setCornersRadii(topLeft: number, topRight, bottomRight: number, bottomLeft: number);
                }
            }
        }

        module common {
            module util {
                class UriUtil {
                    static LOCAL_RESOURCE_SCHEME;
                }
            }
        }

        module imagepipeline {
            module request {
                class ImageRequestBuilder {
                    static newBuilderWithSource(url);
                }
            }

            module image {
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
            
            module animated {
                module base {
                    class AnimatedDrawable {
                        start(): void;
                        stop(): void;
                        isRunning(): boolean;
                    }
                }
            }
        }
    }
}

declare module java {
    module lang {
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