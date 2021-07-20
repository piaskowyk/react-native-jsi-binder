#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTEventEmitter.h>
#import <React/RCTUIManager.h>
#import <React/RCTUIManagerObserverCoordinator.h>
#import <React/RCTUIManagerUtils.h>

#import "REAValueNode.h"
#import "REAReactBatchObserver.h"

extern RCTBridge *_bridge_reanimated;

@interface REAModule : RCTEventEmitter <RCTBridgeModule, RCTEventDispatcherObserver, RCTUIManagerObserver>

@property (nonatomic, readonly) REANodesManager *nodesManager;
@property (atomic, readonly) REAReactBatchObserver *reactBatchObserver;

@end
