ROOT_DIR := $(shell git rev-parse --show-toplevel)
APP_DIR := $(ROOT_DIR)/packages/app

# デフォルトターゲット
.PHONY: dev
dev: install
	bun run --filter './packages/app' dev
	
.PHONY: build
build: install
	bun run --filter './packages/app' build
	
.PHONY: test
test: install
	bun test

.PHONY: format
format: install
	bun run --filter './packages/app' check

.PHONY: install-tools
install-tools:
	@while read line; do \
		lang=$$(echo $$line | cut -d ' ' -f1); \
		version=$$(echo $$line | cut -d ' ' -f2); \
		asdf plugin add $$lang || true; \
		asdf install $$lang $$version; \
		asdf local $$lang $$version; \
	done < .tool-versions
	
.PHONY: install-dependencies
install-lefthook: install-tools
	lefthook install
	
.PHONY: install-packages
install-packages: install-tools
	bun install
	
.PHONY: install
install: install-lefthook install-packages
	@echo "Install completed."
	
$(APP_DIR)/.env:
	cp $(APP_DIR)/.env.template $(APP_DIR)/.env

.PHONY: setup
setup: install $(APP_DIR)/.env
	@echo "Setup completed."
	
.PHONY: clean
clean:
	rm -rf $(ROOT_DIR)/node_modules
	rm -rf $(APP_DIR)/node_modules
	rm -rf $(APP_DIR)/.env